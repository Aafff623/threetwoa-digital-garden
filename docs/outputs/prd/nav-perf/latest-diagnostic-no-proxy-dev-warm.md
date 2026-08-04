# Nav latency — diagnostic-no-proxy-dev-warm

- Base: `http://localhost:3000`
- Measured: 2026-07-14T09:44:43.290Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 486 |
| avg click→content | 546 |
| avg click→quiet | 1156 |
| avg longtask total | 241 |
| avg longtask max | 208 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 365 | 446 | 1009 | 1 | 133 | 133 | |
| gallery | 483 | 583 | 1349 | 3 | 217 | 394 | |
| about | 1054 | 1102 | 1669 | 1 | 548 | 548 | |
| love | 276 | 375 | 993 | 2 | 114 | 167 | |
| footprints | 453 | 460 | 1079 | 1 | 122 | 122 | |
| pond | 279 | 353 | 911 | 1 | 134 | 134 | |
| home-from-writing | 489 | 506 | 1081 | 1 | 191 | 191 | |
