# Nav latency — diagnostic-production-no-proxy

- Base: `http://localhost:3000`
- Measured: 2026-07-14T09:54:10.944Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 322 |
| avg click→content | 365 |
| avg click→quiet | 974 |
| avg longtask total | 207 |
| avg longtask max | 196 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 176 | 179 | 798 | 1 | 119 | 119 | |
| gallery | 205 | 231 | 827 | 1 | 104 | 104 | |
| about | 714 | 743 | 1321 | 1 | 427 | 427 | |
| love | 355 | 433 | 1045 | 1 | 226 | 226 | |
| footprints | 238 | 247 | 867 | 1 | 129 | 129 | |
| pond | 349 | 472 | 1092 | 2 | 247 | 323 | |
| home-from-writing | 218 | 253 | 871 | 1 | 122 | 122 | |
