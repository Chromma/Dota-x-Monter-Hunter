# -*- coding: utf-8 -*-
import json
import re

# Este script final utiliza un enfoque de reconstrucción para garantizar la máxima precisión.
# Lee la estructura de heroes.js, reconstruye los bloques de los héroes con los datos
# correctos de excel_data.json y luego reemplaza los bloques antiguos en una copia nueva.

def get_original_structure(filepath='heroes.js'):
    """
    Analiza heroes.js para extraer la estructura exacta (IDs, nombres) de cada
    héroe, set y pieza, que se usará como plantilla.
    """
    try:
        with open(filepath, 'r', encoding='utf-8') as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error Crítico: No se encontró el archivo base '{filepath}'.")
        return None, None

    # Extraer todo el contenido del array INITIAL_HEROES
    match = re.search(r"export const INITIAL_HEROES = (\[[\s\S]*?\]);", content)
    if not match:
        raise ValueError("No se pudo encontrar 'INITIAL_HEROES' en heroes.js")
    
    full_array_content = match.group(1)
    
    # Dividir el contenido en héroes, manteniendo a Palico y Poogie
    # La división se hace por '}, {' lo que nos da los objetos como strings
    hero_blocks_str = re.split(r'(?<=\})\s*,\s*(?=\{)', full_array_content[1:-1]) # Ignora [ y ]

    structure = {}
    non_hero_blocks = [] # Para Palico y Poogie
    
    hero_id_map = {"sniper", "techies", "antimage", "dk", "beastmaster", "windranger"}

    for block in hero_blocks_str:
        id_match = re.search(r"id:\s*'([^']*)'", block)
        if id_match and id_match.group(1) in hero_id_map:
            hero_id = id_match.group(1)
            hero_structure = {'id': hero_id, 'skins': []}
            
            # Extraer las propiedades principales del héroe
            main_props = re.search(r"id:\s*'(.*?)',\s*name:\s*'(.*?)',\s*monster:\s*'(.*?)',\s*theme:\s*'(.*?)',", block)
            if main_props:
                hero_structure.update(zip(['id', 'name', 'monster', 'theme'], main_props.groups()))

            # Extraer skins (sets)
            skins_block_match = re.search(r"skins:\s*\[([\s\S]*)\]", block)
            skins_block = skins_block_match.group(1) if skins_block_match else ""
            
            skin_blocks_str = re.split(r'(?<=\})\s*,\s*(?=\{)', skins_block)

            for skin_str in skin_blocks_str:
                if not skin_str.strip(): continue
                skin_id_match = re.search(r"id:\s*'([^']*)'", skin_str)
                skin_name_match = re.search(r"name:\s*'([^']*)'", skin_str)
                skin_id = skin_id_match.group(1) if skin_id_match else ""
                skin_name = skin_name_match.group(1) if skin_name_match else ""
                
                skin_data = {'id': skin_id, 'name': skin_name, 'pieces': []}
                
                # Extraer piezas
                pieces_block_match = re.search(r"pieces:\s*\[([\s\S]*)\]", skin_str)
                pieces_block = pieces_block_match.group(1) if pieces_block_match else ""
                
                piece_blocks_str = re.split(r'(?<=\})\s*,\s*(?=\{)', pieces_block)

                for piece_str in piece_blocks_str:
                    if not piece_str.strip(): continue
                    piece_id_match = re.search(r"id:\s*'([^']*)'", piece_str)
                    piece_name_match = re.search(r"name:\s*'([^']*)'", piece_str)
                    piece_id = piece_id_match.group(1) if piece_id_match else ""
                    piece_name = piece_name_match.group(1) if piece_name_match else ""
                    skin_data['pieces'].append({'id': piece_id, 'name': piece_name})
                
                hero_structure['skins'].append(skin_data)
            structure[hero_id] = hero_structure
        else:
            # Es Palico o Poogie
            non_hero_blocks.append(block)
            
    return structure, non_hero_blocks

def main():
    try:
        structure, non_hero_blocks = get_original_structure()
        if structure is None: return

        with open('excel_data.json', 'r', encoding='utf-8') as f:
            excel_data = json.load(f)
    except Exception as e:
        print(f"Error durante la inicialización: {e}")
        return

    hero_map = {
        "Sniper": "sniper", "Techies": "techies", "Anti Mage": "antimage",
        "Dragon Knight": "dk", "Beastmaster": "beastmaster", "Windranger": "windranger"
    }
    
    rebuilt_hero_blocks = []
    total_updates = 0

    for excel_hero_name, hero_js_id in hero_map.items():
        if hero_js_id not in structure or excel_hero_name not in excel_data:
            continue

        hero_struct = structure[hero_js_id]
        excel_hero_data = excel_data[excel_hero_name]
        excel_sets = list(excel_hero_data.keys())

        # Construir el string del héroe
        hero_skins_str_list = []
        for i, skin_struct in enumerate(hero_struct['skins']):
            excel_set_name = excel_sets[i]
            excel_pieces_data = excel_hero_data[excel_set_name]

            piece_str_list = []
            for piece_struct in skin_struct['pieces']:
                js_piece_name = piece_struct['name']
                
                found_piece_name = next((name for name in excel_pieces_data if name in js_piece_name), None)
                
                if found_piece_name:
                    materials = excel_pieces_data[found_piece_name]
                    recipe_items = [f"{{ matId: MAT_IDS.{key}, amount: {value} }}" for key, value in materials.items()]
                    recipe_str = f"[\n                            {',\\n                            '.join(recipe_items)}\n                        ]"
                    total_updates += 1
                else:
                    recipe_str = "[]" # Mantener vacío si no se encuentra
                    print(f"AVISO: No se encontró la pieza '{js_piece_name}' en los datos del Excel.")

                piece_str = f"""                    {{
                        id: '{piece_struct['id']}',
                        name: '{js_piece_name}',
                        recipe: {recipe_str}
                    }}"""
                piece_str_list.append(piece_str)
            
            skin_pieces_str = ",\n".join(piece_str_list)
            skin_str = f"""            {{
                id: '{skin_struct['id']}',
                name: '{skin_struct['name']}',
                pieces: [
{skin_pieces_str}
                ]
            }}"""
            hero_skins_str_list.append(skin_str)

        hero_skins_final_str = ",\n".join(hero_skins_str_list)
        hero_block = f"""    {{
        id: '{hero_struct['id']}',
        name: '{hero_struct['name']}',
        monster: '{hero_struct['monster']}',
        theme: '{hero_struct['theme']}',
        skins: [
{hero_skins_final_str}
        ]
    }}"""
        rebuilt_hero_blocks.append(hero_block)

    # Ensamblar el archivo final
    final_blocks = non_hero_blocks + rebuilt_hero_blocks
    final_content = f"""import {{ MAT_IDS }} from './constants';

export const INITIAL_HEROES = [
{',\\n'.join(final_blocks)}
];
"""

    with open('heroes_v2.js', 'w', encoding='utf-8') as f:
        f.write(final_content)
    
    print(f"\nProceso completado. Se reconstruyeron los 6 héroes con {total_updates} recetas actualizadas en 'heroes_v2.js'.")


if __name__ == "__main__":
    main()
