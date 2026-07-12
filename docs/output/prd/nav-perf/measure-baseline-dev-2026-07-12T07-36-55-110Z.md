# Nav latency — baseline-dev

- Base: `http://localhost:3000`
- Measured: 2026-07-12T07:36:55.112Z
- Protocol: Hard reload with cache disabled (Ctrl+F5 analogue), then click in-app link; record click→url / click→main / click→networkidle and longtask sample.

| Route | click→url (ms) | click→main (ms) | click→idle (ms) | longtask max (ms) | Error |
| --- | ---: | ---: | ---: | ---: | --- |
| writing | 97 | 102 | 103 | 0 | |
| gallery | 54 | 57 | 57 | 0 | |
| about | 46 | 48 | 49 | 0 | |
| love | 56 | 58 | 59 | 0 | |
| footprints | 47 | 52 | 52 | 0 | |
| pond | 58 | 61 | 61 | 0 | |
| home-from-writing | 65 | 67 | 67 | 0 | |
