# Nav latency — diagnostic-no-proxy-dev

- Base: `http://localhost:3000`
- Measured: 2026-07-14T09:43:32.964Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 543 |
| avg click→content | 679 |
| avg click→quiet | 1272 |
| avg longtask total | 307 |
| avg longtask max | 237 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 784 | 1021 | 1654 | 3 | 332 | 486 | |
| gallery | 497 | 750 | 1277 | 3 | 232 | 366 | |
| about | 594 | 637 | 1194 | 1 | 324 | 324 | |
| love | 720 | 1013 | 1715 | 3 | 248 | 448 | |
| footprints | 386 | 409 | 1030 | 1 | 131 | 131 | |
| pond | 322 | 413 | 964 | 1 | 163 | 163 | |
| home-from-writing | 496 | 511 | 1072 | 1 | 229 | 229 | |
