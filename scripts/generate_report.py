import json

def generate_report():
    """
    Loads hero data from excel_data.json and generates a detailed report
    in 'reporte_completo.txt'.
    """
    try:
        with open('excel_data.json', 'r', encoding='utf-8') as f:
            data = json.load(f)
    except FileNotFoundError:
        print("Error: El archivo 'excel_data.json' no fue encontrado.")
        print("Por favor, ejecuta primero 'extract_hero_data.py' para generarlo.")
        return
    except json.JSONDecodeError:
        print("Error: El archivo 'excel_data.json' está corrupto o mal formateado.")
        return

    # This mapping should be kept in sync with the one in extract_hero_data.py
    MATERIAL_MAP = {
        'Monster Essense': 'Essence',
        'Monster Fur': 'Fur',
        'Monster Claw': 'Claw',
        'Odogaron Sinew': 'OdoSinew',
        'Odogaron Hardfang': 'OdoFang',
        'Odogaron Scale': 'OdoScale',
        'Zinogre Electrofur': 'ZinFur',
        'Zinogre Deathly Shocker': 'ZinShocker',
        'Zinogre Cortex': 'ZinCortex',
        'Rathalos Carapache': 'RathCarapache',
        'Rathalos Wing': 'RathWing',
        'Rathalos Tail': 'RathTail',
        'Kirin Thunderhorn': 'KirThunderhorn',
        'Kirin Hide': 'KirHide',
        'Kirin Mane': 'KirMane',
        'Ancient Bone': 'AncientBone',
        'Kestodon Shell': 'KestShell',
        'Bullfango Head': 'BullHead',
        'Large Barrel': 'LargeBarrel',
        'Gunpowder': 'Gunpowder',
        'Iron Ore': 'IronOre',
        'Odogaron Shard': 'OdoShard',
        'Odogaron Mantle': 'OdoMantle',
        'Zinogre Hardhorn': 'ZinHorn',
        'Zinogre Skymerald': 'ZinSky',
        'Rathalos Ruby': 'RathRuby',
        'Rathalos Plate': 'RathPlate',
        'Kirin Azure Horn': 'KirAzureHorn',
        'Large Elder Dragon Gem': 'ElderDragGem',
        'Wyvern Gem': 'WyvernGem',
        'Warped Bone': 'WarpedBone',
        'Sinister Cloth': 'SinisterCloth',
        "Devil's Blight": 'DevilsBlight',
        'Prismatic Pigment': 'PrismaticPigment',
    }
    REVERSE_MAP = {v: k for k, v in MATERIAL_MAP.items()}

    # Define the desired sort order for the report
    SORT_ORDER = [
        'Essence', 'Fur', 'Claw', 'OdoSinew', 'OdoFang', 'OdoScale', 'ZinFur',
        'ZinShocker', 'ZinCortex', 'RathCarapache', 'RathWing', 'RathTail',
        'KirThunderhorn', 'KirHide', 'KirMane', 'AncientBone', 'KestShell',
        'BullHead', 'LargeBarrel', 'Gunpowder', 'IronOre', 'OdoShard',
        'OdoMantle', 'ZinHorn', 'ZinSky', 'RathRuby', 'RathPlate',
        'KirAzureHorn', 'ElderDragGem', 'WyvernGem', 'WarpedBone',
        'SinisterCloth', 'DevilsBlight', 'PrismaticPigment'
    ]
    
    # Helper to sort keys based on SORT_ORDER
    def sort_materials(mat_keys):
        # Fallback for materials not in SORT_ORDER (should not happen with current data)
        return sorted(mat_keys, key=lambda k: SORT_ORDER.index(k) if k in SORT_ORDER else len(SORT_ORDER))

    report_lines = []
    report_lines.append('='*150)
    report_lines.append('REPORTE COMPLETO - EXTRACCIÓN DE DATOS DOTA x MONSTER HUNTER')
    report_lines.append('='*150 + '\n')

    for hero in data:
        report_lines.append(f'\n{'='*150}')
        report_lines.append(f'HÉROE: {hero.upper()}')
        report_lines.append(f'{'='*150}')
        
        hero_data = data[hero]
        hero_total_materials = {}
        set_count = 0
        
        for set_name in hero_data:
            set_count += 1
            report_lines.append(f'\n  SET {set_count}: {set_name}')
            report_lines.append(f'  {'-'*146}')
            
            set_pieces = hero_data[set_name]
            set_total_by_material = {}
            set_total_resources = 0
            
            for piece_name in set_pieces:
                piece_materials = set_pieces[piece_name]
                piece_total = sum(piece_materials.values())
                
                report_lines.append(f'\n    PIEZA: {piece_name}')
                report_lines.append(f'    {'-'*142}')
                
                for mat_key in sort_materials(piece_materials.keys()):
                    amount = piece_materials[mat_key]
                    original_name = REVERSE_MAP.get(mat_key, mat_key)
                    report_lines.append(f'      • {original_name:40s} → {mat_key:25s} | Cantidad: {amount:3d}')
                    
                    set_total_by_material[mat_key] = set_total_by_material.get(mat_key, 0) + amount
                    hero_total_materials[mat_key] = hero_total_materials.get(mat_key, 0) + amount
                    set_total_resources += amount
                
                report_lines.append(f'    Total por pieza ({piece_name}): {piece_total}')
            
            report_lines.append(f'\n  TOTALES POR MATERIAL - SET {set_name}:')
            report_lines.append(f'  {'-'*146}')
            for mat_key in sort_materials(set_total_by_material.keys()):
                amount = set_total_by_material[mat_key]
                original_name = REVERSE_MAP.get(mat_key, mat_key)
                report_lines.append(f'    {original_name:40s} → {mat_key:25s} | Total: {amount:3d}')
            
            report_lines.append(f'\n  TOTAL SUMATORIA DE MATERIALES - SET {set_name}: {set_total_resources}')
        
        report_lines.append(f'\n\n  TOTALES POR MATERIAL - HÉROE {hero}:')
        report_lines.append(f'  {'-'*146}')
        hero_grand_total = 0
        for mat_key in sort_materials(hero_total_materials.keys()):
            amount = hero_total_materials[mat_key]
            original_name = REVERSE_MAP.get(mat_key, mat_key)
            report_lines.append(f'    {original_name:40s} → {mat_key:25s} | Total: {amount:3d}')
            hero_grand_total += amount
        
        report_lines.append(f'\n  TOTAL SUMATORIA DE MATERIALES - HÉROE {hero}: {hero_grand_total}')

    report_lines.append(f'\n\n{'='*150}')
    report_lines.append('FIN DEL REPORTE')
    report_lines.append(f'{'='*150}')

    try:
        with open('reporte_completo.txt', 'w', encoding='utf-8') as f:
            f.write('\n'.join(report_lines))
        print('Archivo de reporte "reporte_completo.txt" creado exitosamente.')
    except IOError as e:
        print(f"Error al escribir en el archivo 'reporte_completo.txt': {e}")

if __name__ == '__main__':
    generate_report()
