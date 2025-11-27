import re
from pathlib import Path
import json

ROOT = Path('.')
P = ROOT / 'heroes.js'
BAK = ROOT / 'heroes.js.bak'

text = P.read_text(encoding='utf-8')
bak_text = BAK.read_text(encoding='utf-8') if BAK.exists() else None

hero_pattern = re.compile(r"\{\s*\n\s*id:\s*'(?P<id>[^']+)',\s*\n\s*name:\s*'(?P<name>[^']+)',\s*\n\s*monster:\s*'(?P<monster>[^']+)',[\s\S]*?skins:\s*\[(?P<skins>.*?)\]\s*\n\s*\}\s*,", re.DOTALL)

def prefix_for_skin(hero_monster, skin_name):
    if skin_name.strip().lower() == 'base':
        return hero_monster
    return skin_name

missing = []
restored = []
changes_made = False

# First, restore palico/poogie/sniper from backup if present
if bak_text:
    for hero_id in ('palico', 'poogie', 'sniper'):
        m_bak = re.search(r"(\{\s*\n\s*id:\s*'" + hero_id + r"'[\s\S]*?\}\s*,)", bak_text)
        m_cur = re.search(r"(\{\s*\n\s*id:\s*'" + hero_id + r"'[\s\S]*?\}\s*,)", text)
        if m_bak and m_cur:
            bak_block = m_bak.group(1)
            cur_block = m_cur.group(1)
            if bak_block != cur_block:
                text = text.replace(cur_block, bak_block)
                restored.append(hero_id)
                changes_made = True

# Now scan heroes for piece names missing prefixes
for m in hero_pattern.finditer(text):
    hero_id = m.group('id')
    hero_monster = m.group('monster')
    skins_block = m.group('skins')

    # split skins conservatively
    skin_splits = re.split(r"\n\s*\},\n\s*\{", skins_block)
    for skin_text in skin_splits:
        skin_name_match = re.search(r"name:\s*'([^']+)'", skin_text)
        if not skin_name_match:
            continue
        skin_name = skin_name_match.group(1)
        prefix = prefix_for_skin(hero_monster, skin_name)

        # find pieces block
        pieces_match = re.search(r"pieces:\s*\[(.*?)\]", skin_text, re.DOTALL)
        if not pieces_match:
            continue
        pieces_text = pieces_match.group(1)

        # find piece entries with id and name
        piece_pattern = re.compile(r"\{\s*id:\s*'(?P<pid>[^']+)',\s*name:\s*'(?P<pname>[^']+)'", re.DOTALL)
        for pm in piece_pattern.finditer(pieces_text):
            pid = pm.group('pid')
            pname = pm.group('pname')
            # check prefix
            if not (pname == prefix or pname.startswith(prefix + ' ')):
                missing.append({
                    'hero_id': hero_id,
                    'hero_monster': hero_monster,
                    'skin_name': skin_name,
                    'piece_id': pid,
                    'piece_name': pname,
                    'expected_prefix': prefix
                })

# If we restored blocks, write back updated heroes.js
if changes_made:
    P.write_text(text, encoding='utf-8')

out = {
    'restored_heroes': restored,
    'missing_prefixes_count': len(missing),
    'missing_prefixes': missing
}

# write output file for reliable reading
out_path = Path('scripts') / 'list_missing_output.json'
out_path.write_text(json.dumps(out, indent=2, ensure_ascii=False), encoding='utf-8')
print(f"Wrote {out_path} — restored: {restored} — missing: {len(missing)} entries")
