# Typescript launchpad

Ready to use typescript environment.

## Table of contents

1. [Available commands](#available-commands)
2. [Explore code samples](#explore-code-samples)
3. [Typescript configuration details](#typescript-configuration-details)
4. [Footnotes](#footnotes)

## Available commands

```bash
# clone the repository using degit
npx degit https://github.com/mulekick/typescript-launchpad.git my-awesome-typescript-project

# cd into your project
cd my-awesome-typescript-project

# clean install dependencies
npm ci

# list project types
npm run list

# validate project types
npm run typecheck

# lint project files
npm run lint

# run your code using tsx
npx tsx src/my-awesome-code.ts

# build declaration files
npm run types:build

# build executable files
npm run build

# build documentation
npm run docs:build
```

_Caution : ambient modules and handwritten `*.d.ts` files are not included in the build by default._

## Explore code samples

This repo ships with code samples that illustrate concepts from the typescript handbook :

| Module                                                             | Description                    |
|--------------------------------------------------------------------|--------------------------------|
| [src/compiler-checks](./docs/src/compiler-checks.md)               | Built-in compiler checks.      |
| [src/basic-types](./docs/src/basic-types.md)                       | Basic types.                   |
| [src/composed-types](./docs/src/composed-types.md)                 | Composed types.                |
| [src/code-narrowing](./docs/src/code-narrowing.md)                 | Code narrowing.                |
| [src/typed-functions](./docs/src/typed-functions.md)               | Typed functions.               |
| [src/generic-types](./docs/src/generic-types/README.md)            | Generic types.                 |
| [src/advanced-features](./docs/src/advanced-features.md)           | Advanced features.             |
| [src/conditional-types](./docs/src/conditional-types.md)           | Conditional types.             |
| [src/functional-programming](./docs/src/functional-programming.md) | Functional programming.        |
| [src/namespaces](./docs/src/namespaces/README.md)                  | Namespaces.                    |
| [src/declaration](./docs/src/declaration/README.md)                | Sample declaration file.       |
| [src/implementation](./docs/src/implementation.md)                 | Sample implementation file.    |
| [src/ambient](./docs/src/ambient/README.md)                        | Ambient module declaration.    |

## Typescript configuration details

[`tsconfig.json`](./tsconfig.json) is the reference for up to date, fine tuned typescript configuration.

The following `compilerOptions` keys need special attention : 
- [`"allowImportingTsExtensions": true`](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions)
  - Allowed because `noEmit` is true.
  - `tsx` manages execution while `babel` manages building.
- [`"noUncheckedSideEffectImports": true`](https://www.typescriptlang.org/tsconfig/#noUncheckedSideEffectImports)
  - Resolves and checks side effects imports explicitly.
  - Non `*.ts` imports may have to be `@ts-ignore`d.
- [`"allowArbitraryExtensions": false`](https://www.typescriptlang.org/tsconfig/#allowArbitraryExtensions)
  - Opts out of writing `*.d.ts` files for non `*.ts` files (ex. `*.css`) for successful compilation.
- [`"allowJs": false`](https://www.typescriptlang.org/tsconfig/#allowJs)
  - Opts out of typechecking `*.js` files.
  - `*.d.ts` files will be [generated with `tsc`](https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html) or declared as ambient modules.
- `"checkJs": false`
  - See above.
- `"maxNodeModuleJsDepth": 0`
  - See above.
- [`"declarationMap": false`](https://www.typescriptlang.org/tsconfig/#declarationMap) :
  - Opts out of generating [sourcemaps](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) since `tsx` natively supports debugging.
- `"sourceMap": false` (see above).
- [`"isolatedModules": true`](https://www.typescriptlang.org/tsconfig/#isolatedModules) :
  - Ensures that `*.ts` code can be safely transpiled by external bundlers (`vite`, `babel` etc).
- [`"verbatimModuleSyntax": true`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax) :
  - Forces being specific about importing as a type versus importing as a value.
- [`"allowSyntheticDefaultImports": true`](https://www.typescriptlang.org/tsconfig/#allowSyntheticDefaultImports) :
  - Emulates a default export for modules that do not have one.
  - Also, `import * as X from "Y"` should never be used since it only imports **_own properties_** of exported values.
- [`"skipLibCheck": false`](https://www.typescriptlang.org/tsconfig/#skipLibCheck)
  - Ensures that types for the project are checked exhaustively at compilation.

## Footnotes

- I personally opt to **_separate declarations from implementations_** as much as possible for clarity.
- When things get complicated, it's better to separate concerns by coding raw JS and typing it afterwards.
- As opposed to ECMA, typescript maintainers sometimes have a tendency to [overengineer things](https://www.typescriptlang.org/docs/handbook/2/classes.html#parameter-properties).
- Another striking example of that tendency can be found [here](https://www.typescriptlang.org/docs/handbook/namespaces.html#aliases).
- The remedy to that is to stick to useful features and use tried and tested coding patterns.
- Pro tip : when types created from a generic type serve almost identical implementations, **_the generic type probably shouldn't exist_**.