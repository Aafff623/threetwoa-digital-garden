# Nav latency — diagnostic-current-dev-a

- Base: `http://localhost:3000`
- Measured: 2026-07-14T09:34:49.968Z
- Protocol: Ctrl+F5 analogue (cache disabled + hard reload) → click Link → measure path/content/quiet + longtasks in 2.5s window

## Averages (successful routes)

| Metric | ms |
| --- | ---: |
| avg click→path | 11330 |
| avg click→content | 11458 |
| avg click→quiet | 12389 |
| avg longtask total | 648 |
| avg longtask max | 477 |

## Per route

| Route | path | content | quiet | LT count | LT max | LT total | Error |
| --- | ---: | ---: | ---: | ---: | ---: | ---: | --- |
| writing | - | - | - | - | - | - | locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for locator('header a[href="/writing"], a[href="/writing"]').first()[22m
[2m    - locator resolved to <a href="/writing" class="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-colors hover:bg-charcoal/5 dark:hover:bg-white/5">…</a>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    27 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
 |
| gallery | - | - | - | - | - | - | locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for locator('header a[href="/gallery"], a[href="/gallery"]').first()[22m
[2m    - locator resolved to <a href="/gallery" class="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-colors hover:bg-charcoal/5 dark:hover:bg-white/5">…</a>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    27 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
 |
| about | - | - | - | - | - | - | locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for locator('header a[href="/about"], a[href="/about"]').first()[22m
[2m    - locator resolved to <a href="/about" class="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-colors hover:bg-charcoal/5 dark:hover:bg-white/5">…</a>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    27 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
 |
| love | - | - | - | - | - | - | locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for locator('header a[href="/love"], a[href="/love"]').first()[22m
[2m    - locator resolved to <a href="/love" class="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-colors hover:bg-charcoal/5 dark:hover:bg-white/5">…</a>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    25 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
 |
| footprints | - | - | - | - | - | - | locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for locator('header a[href="/footprints"], a[href="/footprints"]').first()[22m
[2m    - locator resolved to <a href="/footprints" class="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-colors hover:bg-charcoal/5 dark:hover:bg-white/5">…</a>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    23 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
[2m    - waiting for element to be visible, enabled and stable[22m
[2m    - element is visible, enabled and stable[22m
[2m    - scrolling into view if needed[22m
[2m    - done scrolling[22m
 |
| pond | - | - | - | - | - | - | locator.click: Timeout 15000ms exceeded.
Call log:
[2m  - waiting for locator('header a[href="/pond"], a[href="/pond"]').first()[22m
[2m    - locator resolved to <a href="/pond" class="flex items-center gap-2 px-2.5 py-2 rounded-xl text-left transition-colors hover:bg-charcoal/5 dark:hover:bg-white/5">…</a>[22m
[2m  - attempting click action[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m    - waiting 20ms[22m
[2m    2 × waiting for element to be visible, enabled and stable[22m
[2m      - element is visible, enabled and stable[22m
[2m      - scrolling into view if needed[22m
[2m      - done scrolling[22m
[2m      - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m    - retrying click action[22m
[2m      - waiting 100ms[22m
[2m    26 × waiting for element to be visible, enabled and stable[22m
[2m       - element is visible, enabled and stable[22m
[2m       - scrolling into view if needed[22m
[2m       - done scrolling[22m
[2m       - <div class="relative z-10 mx-auto flex min-h-[calc(100dvh-6rem)] w-full max-w-6xl flex-col justify-center pb-44 sm:pb-48 lg:pb-52">…</div> from <main class="grow flex flex-col">…</main> subtree intercepts pointer events[22m
[2m     - retrying click action[22m
[2m       - waiting 500ms[22m
 |
| home-from-writing | 11330 | 11458 | 12389 | 4 | 477 | 648 | |
