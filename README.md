# Playwright + Cucumber (BDD) Test Automation Framework

TypeScript-based UI test automation framework combining [Playwright](https://playwright.dev/) with [Cucumber-js](https://github.com/cucumber/cucumber-js) for Gherkin-style BDD scenarios.

## Folder structure

```
project-root/
├── src/
│   ├── features/           # .feature files (Gherkin scenarios)
│   ├── stepDefinitions/    # step definitions — orchestrate page object calls only
│   ├── pages/              # Page Object classes (actions/methods only, no raw locators/values)
│   ├── locators/           # locator objects, one file per page, imported into the matching page
│   ├── data/                # test data, constants, env-derived config — no literals in pages/steps
│   ├── support/            # world.ts (Cucumber World / Playwright fixtures), hooks.ts (lifecycle)
│   └── utils/               # generic helpers (env reader, wait helpers, etc.)
├── config/                 # cucumber.js, playwright.config.ts
├── reports/                # generated HTML/JSON test reports (gitignored)
├── package.json
├── tsconfig.json
└── .env / .env.example
```

## Conventions (enforced)

- **Locators live in `src/locators/`.** Every page in `src/pages/` has exactly one matching locator file, e.g. `login.page.ts` ↔ `login.locators.ts`. Page objects import their locators; they never inline a selector string.
- **No hardcoded values in pages or steps.** URLs, credentials, expected text, timeouts, etc. live in `src/data/` (`constants.ts` for config/URLs, `testData.ts` for input/expected values) and are imported wherever needed.
- **Step definitions only orchestrate.** Files in `src/stepDefinitions/` call methods on page objects (`this.loginPage.login(...)`) — they never call `page.fill/click/goto` directly and never contain a raw string literal used for automation.
- **Page objects only expose actions/assert--helpers.** Methods like `login()`, `getErrorMessage()` — no test assertions inside the page object itself; assertions belong in step definitions.
- **One World, shared browser context.** `src/support/world.ts` defines the Cucumber `CustomWorld` carrying the Playwright `page`/`context`. `src/support/hooks.ts` boots one browser for the whole run (`BeforeAll`/`AfterAll`) and a fresh context/page per scenario (`Before`/`After`), attaching a screenshot on failure.

## Sample flow included

A full login flow against the public [SauceDemo](https://www.saucedemo.com) demo app demonstrates the pattern end-to-end:

- `src/features/login.feature` — 3 scenarios (valid login, locked-out user, invalid credentials)
- `src/stepDefinitions/login.steps.ts`
- `src/pages/login.page.ts` ↔ `src/locators/login.locators.ts`
- `src/data/testData.ts` (credentials/expected messages) + `src/data/constants.ts` (base URL/env config)

Use this as the template for adding new pages/features: add a `.locators.ts`, a `.page.ts` that imports it, a `.feature`, matching steps, and any new data constants.

## Setup

```bash
npm install
npx playwright install chromium
cp .env.example .env   # adjust if needed
```

## Running tests

```bash
npm test            # headless run (uses config/cucumber.js)
npm run test:headed # headed run (HEADLESS=false)
```

Reports are written to `reports/cucumber-report.html` and `reports/cucumber-report.json` after each run.

## Environment variables

| Variable          | Purpose                          | Default                        |
|--------------------|-----------------------------------|---------------------------------|
| `BASE_URL`         | App under test                   | `https://www.saucedemo.com`     |
| `HEADLESS`         | Run browser headless             | `true`                           |
| `DEFAULT_TIMEOUT`  | Default Playwright action timeout (ms) | `30000`                    |

## Adding a new page/feature

1. Add `src/locators/<name>.locators.ts` with the selectors for that page.
2. Add `src/pages/<name>.page.ts` importing that locator file — only action methods, no literals.
3. Add any new test data/config to `src/data/`.
4. Add `src/features/<name>.feature` with Gherkin scenarios.
5. Add `src/stepDefinitions/<name>.steps.ts` that only calls page object methods.
6. If the new page needs to be shared across steps, add it to `CustomWorld` in `src/support/world.ts`.
