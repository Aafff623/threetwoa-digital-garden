# Nav latency — diagnostic-current-dev-softnav

- Base: `http://localhost:3000`
- Measured: 2026-07-14T09:39:51.457Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 5223 |
| avg click→content | 5338 |
| avg click→quiet | 5922 |
| avg longtask total | 389 |
| avg longtask max | 314 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 557 | 564 | 1292 | 3 | 259 | 388 | |
| gallery | 339 | 526 | 1072 | 3 | 159 | 267 | |
| about | 8004 | 8125 | 8630 | 2 | 667 | 735 | |
| love | 4604 | 4870 | 5500 | 4 | 254 | 475 | |
| footprints | 14004 | 14044 | 14616 | 1 | 297 | 297 | |
| pond | 574 | 700 | 1238 | 1 | 209 | 209 | |
| home-from-writing | 8478 | 8540 | 9105 | 1 | 350 | 350 | |
