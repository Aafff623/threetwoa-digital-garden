# Nav latency — after-p0p1

- Base: `http://localhost:3000`
- Measured: 2026-07-12T07:40:56.408Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 762 |
| avg click→content | 852 |
| avg click→quiet | 1495 |
| avg longtask total | 253 |
| avg longtask max | 131 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 310 | 335 | 995 | 1 | 91 | 91 | |
| gallery | 741 | 1028 | 1759 | 5 | 99 | 352 | |
| about | 1182 | 1226 | 1782 | 2 | 232 | 407 | |
| love | 675 | 793 | 1553 | 3 | 94 | 254 | |
| footprints | 820 | 831 | 1453 | 1 | 78 | 78 | |
| pond | 806 | 929 | 1521 | 3 | 108 | 247 | |
| home-from-writing | 803 | 824 | 1402 | 3 | 214 | 342 | |
