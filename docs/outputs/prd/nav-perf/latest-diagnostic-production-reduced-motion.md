# Nav latency — diagnostic-production-reduced-motion

- Base: `http://localhost:3000`
- Measured: 2026-07-14T09:55:28.070Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 881 |
| avg click→content | 982 |
| avg click→quiet | 1819 |
| avg longtask total | 276 |
| avg longtask max | 137 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 518 | 537 | 1316 | 2 | 61 | 115 | |
| gallery | 366 | 434 | 2421 | 4 | 208 | 515 | |
| about | 3651 | 3765 | 4440 | 3 | 332 | 456 | |
| love | 201 | 273 | 791 | 1 | 71 | 71 | |
| footprints | 165 | 180 | 559 | 0 | 0 | 0 | |
| pond | 409 | 672 | 1284 | 3 | 124 | 323 | |
| home-from-writing | 858 | 1011 | 1921 | 5 | 166 | 455 | |
