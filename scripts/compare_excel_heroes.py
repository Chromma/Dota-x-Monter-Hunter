import json
import re
from pathlib import Path

root = Path(__file__).resolve().parents[1]
excel_path = root / 'excel_dump.json'
heroes_path = root / 'heroes.js'
constants_path = root / 'src' / 'data' / 'constants.js'

with open(excel_path, 'r', encoding='utf-8') as f:
    excel = json.load(f)

with open(heroes_path, 'r', encoding='utf-8') as f:
    heroes_js = f.read()

with open(constants_path, 'r', encoding='utf-8') as f:
    const_js = f.read()

# Extract MAT_IDS keys from constants.js
mat_keys = []
for m in re.finditer(r"([A-Za-z0-9_]+):\s*'([a-z0-9_]+)'", const_js):
    key = m.group(1)
    val = m.group(2)
    mat_keys.append((key, val))

# Build header maps for each sheet: find first row with many string values
sheet_headers = {}
for sheet, rows in excel.items():
    header_row = None
    for r in rows[:5]:
        # count number of string values
        str_count = sum(1 for v in r.values() if isinstance(v, str))
        if str_count >= 4:
            header_row = r
            break
    if header_row is None and rows:
        header_row = rows[0]
    # normalized mapping: column_key -> label
    sheet_headers[sheet] = {col: (val if val is not None else '') for col, val in header_row.items()}

# helper normalize
def norm(s):
    if s is None:
        return ''
    return re.sub(r'[^a-z0-9]', '', s.lower())

# build header lookup: for each sheet, map normalized label -> column key
sheet_col_by_norm = {}
for sheet, hdr in sheet_headers.items():
    colmap = {}
    for col, label in hdr.items():
        colmap[norm(label)] = col
    sheet_col_by_norm[sheet] = colmap

# Invert mat_keys for matching
mat_key_norm = {k: norm(k) for k, v in mat_keys}
mat_val_norm = {k: norm(v) for k, v in mat_keys}

# Find mapping from mat key to (sheet, column)
mat_to_column = {}
for k, v in mat_keys:
    k_norm = norm(k)
    v_norm = norm(v)
    found = []
    for sheet, colmap in sheet_col_by_norm.items():
        for label_norm, col in colmap.items():
            # match if label contains key or value or viceversa
            if k_norm and (k_norm in label_norm or label_norm in k_norm):
                found.append((sheet, col, sheet_headers[sheet][col], 'key'))
            elif v_norm and (v_norm in label_norm or label_norm in v_norm):
                found.append((sheet, col, sheet_headers[sheet][col], 'val'))
            else:
                # try partial tokens
                for token in re.findall(r'[a-z]{3,}', k_norm):
                    if token in label_norm:
                        found.append((sheet, col, sheet_headers[sheet][col], 'token'))
                        break
    if found:
        mat_to_column[k] = found[0]  # pick first match
    else:
        mat_to_column[k] = None

# Parse heroes.js to extract heroes structure using naive regex for recipes
# This is a best-effort parser; we rely on the file structure produced earlier
import ast

# Find all recipe occurrences: look for { matId: MAT_IDS.<Key>, amount: <num> }
pattern = re.compile(r"\{\s*matId:\s*MAT_IDS\.([A-Za-z0-9_]+)\s*,\s*amount:\s*([0-9]+)\s*\}")
# Also find the skin context by searching backwards for skin id/name
skin_pattern = re.compile(r"id:\s*'([A-Za-z0-9_]+)'\s*,\s*name:\s*'([^']+)'")

# Tokenize heroes.js into skins by finding 'skins: [' occurrences
heroes = []
# crude split by top-level hero objects
hero_blocks = re.split(r"\},\s*\{\s*id:\s*'", heroes_js)
# fallback: parse using known structure: find all skins with their names and recipes
recipes = []
for m in pattern.finditer(heroes_js):
    recipes.append((m.group(1), int(m.group(2)), m.start()))

# For context, find nearest preceding "name: '...'(skin)" before each recipe
entries = []
for matkey, amt, pos in recipes:
    # search backwards for "id: 'xxx',\n\s*name: 'YYY'" before pos
    prev = heroes_js.rfind("name:", 0, pos)
    skin_name = None
    hero_name = None
    if prev != -1:
        # get a slice
        slice_start = max(0, prev - 200)
        context = heroes_js[slice_start:pos]
        sm = re.search(r"name:\s*'([^']+)'", context)
        if sm:
            skin_name = sm.group(1)
        # try to find hero id earlier
        hm = re.search(r"id:\s*'([A-Za-z0-9_]+)'\s*,\s*name:\s*'", context)
        if hm:
            hero_id = hm.group(1)
        else:
            hero_id = None
    entries.append({'mat': matkey, 'amount': amt, 'skin': skin_name, 'hero_id': hero_id})

# Aggregate amounts by skin name
from collections import defaultdict
skin_agg = defaultdict(lambda: defaultdict(int))
for e in entries:
    key = (e['hero_id'] or '') + '||' + (e['skin'] or '')
    skin_agg[key][e['mat']] += e['amount']

# Now try to match skins to Excel rows. We'll search across all sheets for a row whose Unnamed:0 or 'Unnamed: 0' equals skin name or combination
excel_rows = []
for sheet, rows in excel.items():
    for r in rows:
        name = r.get('Unnamed: 0') or r.get('Unnamed:0') or r.get('Unnamed: 0')
        if name:
            excel_rows.append((sheet, name, r))

# helper to find excel row by skin/hero
def find_excel_for(hero_id, skin_name):
    candidates = []
    target = (hero_id + ' ' + (skin_name or '')).strip().lower()
    alt1 = ((skin_name or '') + '').strip().lower()
    alt2 = (skin_name or '').strip().lower()
    for sheet, name, row in excel_rows:
        n = str(name).strip().lower()
        if n == target or n == alt1 or n == alt2 or target in n or n in target:
            candidates.append((sheet, name, row))
    return candidates

report = []
for skinkey, mats in skin_agg.items():
    hero_id, skin_name = skinkey.split('||')
    # hero_id might be empty; try to match by skin_name only
    matches = find_excel_for(hero_id, skin_name)
    rec = {'hero_id': hero_id, 'skin_name': skin_name, 'found_rows': [m[0]+':'+str(m[1]) for m in matches], 'mat_comparison': {}}
    if matches:
        # pick first match
        sheet, rowname, row = matches[0]
        # for each mat in mats, try to find corresponding column and value
        for matk, amt in mats.items():
            colinfo = mat_to_column.get(matk)
            colval = None
            if colinfo:
                sheet_match, colkey, label, how = colinfo
                # only read if same sheet
                if sheet_match == sheet:
                    colval = row.get(colkey)
            # fallback: search row values for numeric equal to amt
            rec['mat_comparison'][matk] = {'js_total': amt, 'excel_value': colval}
    else:
        rec['note'] = 'No matching excel row found'
    report.append(rec)

outp = root / 'compare_report.json'
with open(outp, 'w', encoding='utf-8') as f:
    json.dump(report, f, ensure_ascii=False, indent=2)

print('Wrote', outp)
