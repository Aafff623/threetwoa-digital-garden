# Nav latency — after-prod

- Base: `https://threetwoa-digital-garden.vercel.app`
- Measured: 2026-07-12T08:04:00.157Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 2820 |
| avg click→content | 2831 |
| avg click→quiet | 3604 |
| avg longtask total | 172 |
| avg longtask max | 107 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 3275 | 3285 | 4288 | 2 | 75 | 148 | |
| gallery | 3450 | 3457 | 4489 | 2 | 86 | 169 | |
| about | 1319 | 1337 | 1938 | 2 | 271 | 396 | |
| love | 564 | 581 | 1201 | 1 | 79 | 79 | |
| footprints | 2521 | 2529 | 3150 | 1 | 72 | 72 | |
| pond | 2250 | 2256 | 3201 | 3 | 105 | 282 | |
| home-from-writing | 6364 | 6375 | 6964 | 1 | 58 | 58 | |
