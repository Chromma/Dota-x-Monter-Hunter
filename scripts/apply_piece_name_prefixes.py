#!/usr/bin/env python3
import re
from pathlib import Path

# Paths
heroes_path = Path('heroes.js')
backup_path = Path('heroes.js.backup-before-names')

# Read original
text = heroes_path.read_text(encoding='utf-8')
backup_path.write_text(text, encoding='utf-8')
print(f"✓ Backup created at {backup_path.name}")

# Protected heroes
protected = {'palico', 'poogie', 'sniper'}

# Extract each hero and its skins, process piece names
# Use a hero-level iteration to avoid cross-contamination

hero_pattern = re.compile(
    r"(\{\s*id:\s*'(?P<hid>[^']+)',\s*name:\s*'[^']+',\s*monster:\s*'(?P<monster>[^']+)',[\s\S]*?skins:\s*\[([\s\S]*?)\]\s*\n\s*\})",
    re.MULTILINE
)

updated_count = 0
new_text = text

for m in hero_pattern.finditer(text):
    hero_id = m.group('hid')
    monster = m.group('monster')
    hero_block = m.group(0)
    skins_content = m.group(3)

    if hero_id in protected:
        print(f"⊘ Skipped {hero_id} (protected)")
        continue

    # For each skin in this hero, find and update piece names
    # Skins are separated by }, { so we can split conservatively
    skin_blocks = re.findall(
        r"\{\s*id:\s*'[^']+',\s*name:\s*'([^']*)'[\s\S]*?pieces:\s*\[([\s\S]*?)\]",
        skins_content
    )

    updated_skins = skins_content
    hero_updates = 0

    for skin_name, pieces_text in skin_blocks:
        # Determine prefix
        prefix = monster if skin_name.strip().lower() == 'base' else skin_name

        # Find all piece name entries and update them
        # Pattern: id: 'xxx', name: 'YYY'
        def repl_piece_name(match):
            nonlocal hero_updates
            before_name = match.group(1)  # id: '...', name: '
            piece_name = match.group(2)
            after_name = match.group(3)   # ' (rest)

            # Skip if already prefixed
            if piece_name.startswith(prefix + ' ') or piece_name == prefix:
                return match.group(0)

            hero_updates += 1
            new_name = f"{prefix} {piece_name}"
            return f"{before_name}{new_name}{after_name}"

        # Replace piece names in this skin's pieces block
        pieces_updated = re.sub(
            r"(id:\s*'[^']+',\s*name:\s*')([^']+)(')",
            repl_piece_name,
            pieces_text
        )

        if pieces_updated != pieces_text:
            # Rebuild the skins_content with updated pieces
            old_pieces_block = f"pieces: [{pieces_text}]"
            new_pieces_block = f"pieces: [{pieces_updated}]"
            updated_skins = updated_skins.replace(old_pieces_block, new_pieces_block, 1)

    if hero_updates > 0:
        updated_count += hero_updates
        print(f"✓ {hero_id}: updated {hero_updates} piece names")
        # Replace hero block in full text
        updated_hero_block = hero_block.replace(skins_content, updated_skins)
        new_text = new_text.replace(hero_block, updated_hero_block)

# Write result
heroes_path.write_text(new_text, encoding='utf-8')
print(f"\n✓ Total: {updated_count} piece name entries updated")
print("✓ heroes.js written successfully")
