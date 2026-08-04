# Nav latency — after-p0-data-hardening

- Base: `http://localhost:3000`
- Measured: 2026-07-14T18:24:32.544Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 586 |
| avg click→content | 706 |
| avg click→quiet | 1441 |
| avg longtask total | 477 |
| avg longtask max | 294 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 361 | 534 | 1208 | 2 | 258 | 379 | |
| gallery | 479 | 537 | 1625 | 6 | 247 | 663 | |
| about | 1219 | 1316 | 1834 | 2 | 525 | 584 | |
| love | 345 | 550 | 1200 | 2 | 237 | 373 | |
| footprints | 711 | 726 | 1348 | 3 | 249 | 550 | |
| pond | 499 | 706 | 1253 | 2 | 366 | 476 | |
| home-from-writing | 485 | 576 | 1619 | 3 | 177 | 316 | |
