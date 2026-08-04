# Nav latency — diagnostic-no-proxy-reduced-motion

- Base: `http://localhost:3000`
- Measured: 2026-07-14T09:48:06.147Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 586 |
| avg click→content | 703 |
| avg click→quiet | 1300 |
| avg longtask total | 178 |
| avg longtask max | 109 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 1029 | 1181 | 1852 | 4 | 76 | 269 | |
| gallery | 249 | 355 | 934 | 2 | 55 | 109 | |
| about | 639 | 676 | 1222 | 1 | 229 | 229 | |
| love | 513 | 797 | 1438 | 3 | 99 | 274 | |
| footprints | 771 | 797 | 1415 | 1 | 63 | 63 | |
| pond | 341 | 496 | 1056 | 2 | 108 | 174 | |
| home-from-writing | 558 | 616 | 1184 | 1 | 131 | 131 | |
