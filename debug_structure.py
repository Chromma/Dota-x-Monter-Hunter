#!/usr/bin/env python3
import openpyxl

wb = openpyxl.load_workbook('Dota_MonHunter.xlsx')
ws = wb['Sniper']

print("Estructura exacta de Sniper - primeras 15 filas:\n")
for row_idx in range(1, 16):
    row_data = []
    for col_idx in range(1, 5):
        val = ws.cell(row_idx, col_idx).value
        row_data.append(str(val) if val is not None else "[EMPTY]")
    print(f"Row {row_idx:2d}: Col1='{row_data[0]:20s}' Col2='{row_data[1]:20s}' Col3='{row_data[2]:20s}' Col4='{row_data[3]:20s}'")
