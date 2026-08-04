# Nav latency — baseline-dev

- Base: `http://localhost:3000`
- Measured: 2026-07-12T07:38:04.048Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 430 |
| avg click→content | 515 |
| avg click→quiet | 1170 |
| avg longtask total | 209 |
| avg longtask max | 114 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 215 | 220 | 868 | 1 | 52 | 52 | |
| gallery | 493 | 703 | 1633 | 5 | 109 | 407 | |
| about | 453 | 478 | 1102 | 2 | 140 | 221 | |
| love | 280 | 437 | 991 | 2 | 76 | 129 | |
| footprints | 426 | 433 | 1055 | 1 | 85 | 85 | |
| pond | 506 | 666 | 1288 | 3 | 133 | 300 | |
| home-from-writing | 636 | 669 | 1255 | 2 | 200 | 267 | |
