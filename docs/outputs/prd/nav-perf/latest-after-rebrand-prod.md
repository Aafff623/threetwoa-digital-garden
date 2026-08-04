# Nav latency — after-rebrand-prod

- Base: `https://threetwoa-digital-garden.vercel.app`
- Measured: 2026-07-12T08:30:20.590Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 1688 |
| avg click→content | 1697 |
| avg click→quiet | 2421 |
| avg longtask total | 174 |
| avg longtask max | 147 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | 1871 | 1879 | 2527 | 1 | 113 | 113 | |
| gallery | 2379 | 2386 | 3392 | 2 | 96 | 172 | |
| about | 1226 | 1242 | 1890 | 2 | 330 | 381 | |
| love | 2579 | 2595 | 3218 | 1 | 113 | 113 | |
| footprints | 506 | 510 | 1114 | 1 | 113 | 113 | |
| pond | 2663 | 2673 | 3608 | 2 | 162 | 223 | |
| home-from-writing | 591 | 597 | 1199 | 1 | 105 | 105 | |
