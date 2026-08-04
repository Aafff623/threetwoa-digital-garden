# Nav latency — after-p0-data-hardening-warm2

- Base: `http://localhost:3000`
- Measured: 2026-07-14T18:26:29.676Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 384 |
| avg click→content | 484 |
| avg click→quiet | 1109 |
| avg longtask total | 337 |
| avg longtask max | 253 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 154 | 198 | 780 | 1 | 102 | 102 | |
| gallery | 349 | 490 | 1527 | 5 | 238 | 583 | |
| about | 741 | 848 | 1360 | 2 | 478 | 532 | |
| love | 360 | 475 | 984 | 1 | 240 | 240 | |
| footprints | 407 | 417 | 1036 | 2 | 235 | 304 | |
| pond | 407 | 599 | 1164 | 2 | 291 | 415 | |
| home-from-writing | 273 | 362 | 912 | 1 | 185 | 185 | |
