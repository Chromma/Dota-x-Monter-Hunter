import json
import re
from pathlib import Path

ROOT = Path(__file__).resolve().parents[1]
EXCEL_DUMP = ROOT / 'excel_dump.json'
HEROES_JS = ROOT / 'heroes.js'
BACKUP = ROOT / 'heroes.js.backup-before-adding-sets'

# Mapping from human-readable material names (as in Excel header row) to MAT_IDS keys
MATERIAL_MAP = {
    'Monster Essense': 'Essence',
    'Monster Fur': 'Fur',
    'Monster Claw': 'Claw',
    'Odogaron Sinew': 'OdoSinew',
    'Odogaron Hardfang': 'OdoFang',
    'Odogaron Scale': 'OdoScale',
    'Odogaron Shard': 'OdoShard',
    'Odogaron Mantle': 'OdoMantle',
    'Zinogre Electrofur': 'ZinFur',
    'Zinogre Deathly Shocker': 'ZinShocker',
    'Zinogre Cortex': 'ZinCortex',
    'Zinogre Hardhorn': 'ZinHorn',
    'Zinogre Skymerald': 'ZinSky',
    'Rathalos Carapache': 'RathCarapache',
    'Rathalos Wing': 'RathWing',
    'Rathalos Tail': 'RathTail',
    'Rathalos Ruby': 'RathRuby',
    'Rathalos Plate': 'RathPlate',
    'Kirin Thunderhorn': 'KirThunderhorn',
    'Kirin Hide': 'KirHide',
    'Kirin Mane': 'KirMane',
    'Kirin Azure Horn': 'KirAzureHorn',
    'Ancient Bone': 'AncientBone',
    'Kestodon Shell': 'Kestshell',
    'Bullfango Head': 'BullHead',
    'Large Barrel': 'LargeBarrel',
    'Gunpowder': 'Gunpowder',
    'Iron Ore': 'IronOre',
    'Large Elder Dragon Gem': 'ElderDragGem',
    'Wyvern Gem': 'WyvernGem',
    'Warped Bone': 'WarpedBone',
    "Sinister Cloth": 'SinisterCloth',
    "Devil's Blight": 'DevilsBlight',
    'Palico Voucher': 'PalicoVoucher',
    'Poogie Voucher': 'PoogieVoucher',
    'Prismatic Pigment': 'PrismaticPigment'
}

# Hero -> piece suffix template used when adding sets
PIECE_TEMPLATES = {
    'techies': ['tank', 'spoon', 'spleen', 'squee', 'cannon'],
    'antimage': ['jacket', 'blade', 'offblade', 'horn', 'persona'],
    'dk': ['sword', 'shield', 'mail', 'helm', 'coil', 'braces'],
    'beastmaster': ['chain', 'helm', 'mail', 'coil', 'vambrace'],
    'windranger': ['helm', 'mail', 'bow', 'cape', 'quiver']
}

# Distribution per piece (fraction of the total for the set)
DISTRIBUTION = {
    5: [0.30, 0.20, 0.20, 0.15, 0.15],
    6: [0.25, 0.20, 0.20, 0.15, 0.10, 0.10]
}

TARGET_HEROES = ['techies', 'antimage', 'dk', 'beastmaster', 'windranger']


def load_excel_rows():
    with EXCEL_DUMP.open('r', encoding='utf-8') as f:
        data = json.load(f)
    # The dump uses the 'Master' sheet with header row as first element
    rows = data.get('Master', [])
    if not rows:
        raise RuntimeError('Master sheet not found in excel_dump.json')
    header_row = rows[0]
    return header_row, rows[2:]


def build_header_to_key(header_row):
    hmap = {}
    for col_name, human in header_row.items():
        if human is None:
            continue
        key = MATERIAL_MAP.get(human)
        if key:
            hmap[col_name] = key
        else:
            # try heuristics
            if 'Essence' in human or 'Essense' in human:
                hmap[col_name] = 'Essence'
            elif 'Fur' in human:
                hmap[col_name] = 'Fur'
            elif 'Claw' in human:
                hmap[col_name] = 'Claw'
            elif 'Rathalos' in human and 'Wing' in human:
                hmap[col_name] = 'RathWing'
            else:
                # unknown header; skip
                pass
    return hmap


def find_sets_for_hero(rows, hero_name):
    # hero_name like 'Techies' or 'Anti Mage' or 'Dragon Knight'
    base_label = f"{hero_name} Base"
    sets = []
    indices = {i: r for i, r in enumerate(rows)}
    start = None
    for i, row in indices.items():
        title = row.get('Unnamed: 0')
        if title == base_label:
            start = i
            sets.append(row)
            # collect following non-empty titled rows until Total or blank
            j = i + 1
            while j < len(rows):
                t = rows[j].get('Unnamed: 0')
                if not t or t == 'Total':
                    break
                sets.append(rows[j])
                j += 1
            break
    return sets


def create_skin_object(hero_id, hero_monster, set_row, header_map):
    title = set_row.get('Unnamed: 0')
    set_key = title
    if title and title.endswith(' Base'):
        # name 'Base' and id uses monster lower / 'base'
        name = 'Base'
        set_id = f"{hero_id}_base_set"
    else:
        name = title
        safe = re.sub(r'[^a-z0-9]+', '_', title.lower()).strip('_')
        set_id = f"{hero_id}_{safe}_set"

    # build material totals dict
    totals = {}
    for col, key in header_map.items():
        val = set_row.get(col)
        if isinstance(val, (int, float)) and val > 0:
            totals[key] = int(val)

    num_pieces = len(PIECE_TEMPLATES[hero_id])
    dist = DISTRIBUTION.get(num_pieces, DISTRIBUTION[5])

    pieces = []
    for idx, suffix in enumerate(PIECE_TEMPLATES[hero_id]):
        piece_id = re.sub(r'_set$', '', set_id) + '_' + suffix
        piece_name = (name if name == 'Base' else name) + ' ' + suffix.capitalize()
        recipe = []
        for mat_key, total in totals.items():
            frac = dist[idx] if idx < len(dist) else dist[-1]
            amt = max(1, round(total * frac))
            recipe.append({'matId': f'MAT_IDS.{mat_key}', 'amount': amt})
        pieces.append({'id': piece_id, 'name': piece_name, 'recipe': recipe})

    # produce JS-like string for skin object
    skin = {
        'id': set_id,
        'name': name,
        'pieces': pieces
    }
    return skin


def render_skin_js(skin):
    parts = []
    parts.append('            {')
    parts.append(f"                id: '{skin['id']}',")
    parts.append(f"                name: '{skin['name']}',")
    parts.append('                pieces: [')
    for p in skin['pieces']:
        parts.append('                    {')
        parts.append(f"                        id: '{p['id']}',")
        parts.append(f"                        name: '{p['name']}',")
        parts.append('                        recipe: [')
        for r in p['recipe']:
            # r['matId'] contains a placeholder like MAT_IDS.X
            parts.append(f"                            {{ matId: {r['matId']}, amount: {r['amount']} }},")
        parts.append('                        ]')
        parts.append('                    },')
    parts.append('                ]')
    parts.append('            },')
    return '\n'.join(parts)


def insert_skins_into_heroes_js(new_skins_by_hero):
    src = HEROES_JS.read_text(encoding='utf-8')
    # backup
    BACKUP.write_text(src, encoding='utf-8')

    for hero_id, skins_js in new_skins_by_hero.items():
        # find hero block
        m = re.search(r"\{\s*id:\s*'" + re.escape(hero_id) + r"',[\s\S]*?skins:\s*\[", src)
        if not m:
            print('Hero not found in heroes.js:', hero_id)
            continue
        start = m.end()
        # find the matching closing bracket for this skins array
        idx = start
        depth = 1
        while idx < len(src):
            if src[idx] == '[':
                depth += 1
            elif src[idx] == ']':
                depth -= 1
                if depth == 0:
                    break
            idx += 1
        insert_pos = idx  # before closing bracket
        insert_text = '\n'.join(skins_js) + '\n'
        src = src[:insert_pos] + insert_text + src[insert_pos:]

    HEROES_JS.write_text(src, encoding='utf-8')
    print('heroes.js updated; backup created at', BACKUP)


def main():
    header_row, rows = load_excel_rows()
    header_map = build_header_to_key(header_row)
    print('Header map:', header_map)

    new_skins_by_hero = {}

    mapping = {
        'techies': 'Techies',
        'antimage': 'Anti Mage',
        'dk': 'Dragon Knight',
        'beastmaster': 'Beastmaster',
        'windranger': 'Windranger'
    }

    for hero_id, human in mapping.items():
        sets = find_sets_for_hero(rows, human)
        print(f'Hero {hero_id} ({human}) -> found {len(sets)} rows')
        # collect set titles
        titles = [r.get('Unnamed: 0') for r in sets if r.get('Unnamed: 0')]
        # ensure we have 4 sets: first is Base, then 3 others
        if len(titles) >= 4:
            # find which are missing compared to existing heroes.js
            pass
        skins_to_add = []
        for r in sets:
            title = r.get('Unnamed: 0')
            if not title:
                continue
            # determine if hero already has this skin by checking heroes.js
            hero_js = HEROES_JS.read_text(encoding='utf-8')
            safe = title if not title.endswith(' Base') else 'Base'
            # simple check: look for id pattern
            check_id = re.sub(r'[^a-z0-9]+', '_', title.lower()).strip('_')
            if title.endswith(' Base'):
                check_pattern = f"{hero_id}_base_set"
            else:
                check_pattern = f"{hero_id}_{check_id}_set"
            if check_pattern in hero_js:
                continue
            skin = create_skin_object(hero_id, None, r, header_map)
            skins_to_add.append(render_skin_js(skin))

        if skins_to_add:
            print(f'Will add {len(skins_to_add)} skins for {hero_id}:', [s.split('\n')[1].strip() for s in skins_to_add])
            new_skins_by_hero[hero_id] = skins_to_add

    if not new_skins_by_hero:
        print('No new skins detected to add')
        return

    print('Inserting skins for heroes:', list(new_skins_by_hero.keys()))
    insert_skins_into_heroes_js(new_skins_by_hero)


if __name__ == '__main__':
    main()
