---
title: 👌🏼 jest over vitest
slug: jest-over-vitest
date: "2022-11-03"
topic: coding
---

JavaScript tooling has gotten a lot faster recently with the advent of ESModules and the creation of new Rust and Go based compilers. These speed improvements have affected everything from bundlers to test runners. [Vitest][vitest] is a prime example of a new test runner that leverages [esbuild][esbuild] to execute very quickly.

I use [jest][jest] to run tests on this website, but I was curious to see how [vitest][vitest] performed in comparison. I [converted][pr] my entire test suite, and here are my thoughts on how it stacks up.

## 👛 initial changes

The first thing I noticed was that `vitest` does not expose globals like `test` and `expect` by default like `jest` does. This is [configurable][globals] to match the `jest` experience.

Another main difference is that `vitest`does not automatically clean up mocks between tests like `jest` does. I handled this by adding cleanup code to my `setup.ts` file.

```typescript
afterEach(() => {
    cleanup()
    vi.clearAllMocks()
    vi.clearAllTimers()
})
```

I have since found a [configuration option][mocks] that can clear mocks between each test.

## 🟦 types

When writing tests, I typically use [jest-dom][jest-dom] to add additional DOM matchers. These matchers come with their own types, and extend the `expect` keyword as expected. While `vitest` does support TypeScript, it doesn't extend these types correctly by default. In order to get this working I had to manually add the types to the `vi` object.

```typescript
declare global {
    // eslint-disable-next-line @typescript-eslint/no-namespace
    namespace Vi {
        interface JestAssertion<T>
            extends jest.Matchers<void, T>,
                TestingLibraryMatchers<T, void> {}
    }
}
```

## 🌠 svg modules

Another thing I had to adjust was how `svg` files were loaded into the test runner. With `jest`, you can use the `moduleNameMapper` configuration to stub out different file extensions. This was useful for all types of images and even `css`.

```typescript
{
    moduleNameMapper: {
        "\\.module.css$": "identity-obj-proxy",
        "\\.css$": "<rootDir>/src/test-utils/css.ts",
        "\\.jpg$": "<rootDir>/src/test-utils/image.ts",
        "\\.svg$": "<rootDir>/src/test-utils/svg.tsx",
    }
}
```

With `vitest` I found a [plugin][svgr] for importing `svg` images. This plugin requires some interesting annotations to import statements to differentiate importing the `svg` as a URL or as a React component. These annotations luckily had no effect on my application build process, and are only used during testing.

```typescript
import TwitterIcon from "svg/twitter.svg?component"
```

## 🏎 performance

Based on everthing I had read, `vitest` was going to be much faster than `jest` thanks to `esbuild`. However, in practice I found that `jest` test runs completed X% faster.

| jest | vitest |
| ---- | ------ |
| one  | two    |

-   performance
    -   threads
    -   happy dom (form submit issue)

[vitest]: https://vitest.dev
[esbuild]: https://esbuild.github.io
[jest]: https://jestjs.io
[pr]: https://github.com/bradgarropy/bradgarropy.com/pull/334
[globals]: https://vitest.dev/config/#globals
[mocks]: https://vitest.dev/config/#clearmocks
[jest-dom]: https://testing-library.com/docs/ecosystem-jest-dom
[modules]: https://jestjs.io/docs/configuration#modulenamemapper-objectstring-string--arraystring
[svgr]: https://github.com/lucsky/vite-plugin-svgr
