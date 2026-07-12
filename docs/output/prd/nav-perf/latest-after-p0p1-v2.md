# Nav latency — after-p0p1-v2

- Base: `http://localhost:3000`
- Measured: 2026-07-12T07:42:09.052Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 404 |
| avg click→content | 453 |
| avg click→quiet | 927 |
| avg longtask total | 79 |
| avg longtask max | 52 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 160 | 206 | 570 | 0 | 0 | 0 | |
| gallery | 306 | 310 | 773 | 0 | 0 | 0 | |
| about | 547 | 556 | 1170 | 2 | 114 | 192 | |
| love | 387 | 525 | 896 | 0 | 0 | 0 | |
| footprints | 437 | 471 | 837 | 0 | 0 | 0 | |
| pond | 349 | 437 | 992 | 2 | 62 | 113 | |
| home-from-writing | 641 | 665 | 1250 | 2 | 185 | 245 | |
