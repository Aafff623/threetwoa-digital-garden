# Nav latency — diagnostic-no-proxy-block-media

- Base: `http://localhost:3000`
- Measured: 2026-07-14T09:47:05.604Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 674 |
| avg click→content | 702 |
| avg click→quiet | 1530 |
| avg longtask total | 380 |
| avg longtask max | 268 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 1103 | 1119 | 2000 | 2 | 336 | 407 | |
| gallery | 573 | 578 | 2166 | 5 | 207 | 618 | |
| about | 890 | 1009 | 1558 | 1 | 494 | 494 | |
| love | 527 | 546 | 1434 | 3 | 250 | 443 | |
| footprints | 825 | 831 | 1445 | 2 | 222 | 278 | |
| pond | 338 | 341 | 1053 | 2 | 145 | 200 | |
| home-from-writing | 465 | 492 | 1055 | 1 | 220 | 220 | |
