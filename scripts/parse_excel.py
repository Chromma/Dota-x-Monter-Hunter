import json
import sys
from pathlib import Path
import pandas as pd

wb_path = Path(__file__).resolve().parents[1] / 'Dota_MonHunter.xlsx'
if not wb_path.exists():
    print(f'Missing file: {wb_path}')
    sys.exit(2)

# Read all sheets
sheets = pd.read_excel(wb_path, sheet_name=None, engine='openpyxl')
output = {}
for name, df in sheets.items():
    # Convert dataframe to list of records, preserving NaNs as None
    records = df.where(pd.notnull(df), None).to_dict(orient='records')
    output[name] = records

out_path = Path(__file__).resolve().parents[1] / 'excel_dump.json'
with open(out_path, 'w', encoding='utf-8') as f:
    json.dump(output, f, ensure_ascii=False, indent=2)

print('Wrote', out_path)
