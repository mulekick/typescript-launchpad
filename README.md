## Default typescript setup

### Bootstrap a new project

- Run `npx degit https://github.com/mulekick/typescript-setup.git my-awesome-typescript-project`.

---

### Typescript configuration

- `tsconfig.json` is the reference for up to date, fine tuned typescript configuration.
- The following `compilerOptions` keys need special attention : 
   - [`"allowImportingTsExtensions": true`](https://www.typescriptlang.org/tsconfig/#allowImportingTsExtensions) :
     - Allowed because `noEmit` is true.
     -`tsx` handles execution while `vite` or `babel` handle building.
   - [`"noUncheckedSideEffectImports": true`](https://www.typescriptlang.org/tsconfig/#noUncheckedSideEffectImports) :
     - Resolves and checks side effects imports explicitly.
     - Non `*.ts` imports may have to be `@ts-ignore`d.
   - [`"allowArbitraryExtensions": false`](https://www.typescriptlang.org/tsconfig/#allowArbitraryExtensions) :
     - Opts out of writing `*.d.ts` files for non `*.ts` files (ex. `*.css`) for successful compilation.
   - [`"allowJs": false`](https://www.typescriptlang.org/tsconfig/#allowJs) :
     - Opts out of typechecking `*.js` files.
     - `*.d.ts` files will be [generated with `tsc`](https://www.typescriptlang.org/docs/handbook/declaration-files/dts-from-js.html) when importing `*.js` source code instead.
   - `"checkJs": false` (see above).
   - `"maxNodeModuleJsDepth": 0` (see above).
   - [`"declarationMap": false`](https://www.typescriptlang.org/tsconfig/#declarationMap) :
     - Opts out of generating [sourcemaps](https://firefox-source-docs.mozilla.org/devtools-user/debugger/how_to/use_a_source_map/index.html) since `tsx` natively supports debugging.
     - Reenable those settings later if required.
   - `"sourceMap": false` (see above).
   - [`"isolatedModules": true`](https://www.typescriptlang.org/tsconfig/#isolatedModules) :
     - Ensures that `*.ts` code can be safely transpiled by external bundlers (`vite`, `babel` etc).
   - [`"verbatimModuleSyntax": true`](https://www.typescriptlang.org/tsconfig/#verbatimModuleSyntax) :
     - Forces being specific about importing as a type versus importing as a value.
   - [`"allowSyntheticDefaultImports": true`](https://www.typescriptlang.org/tsconfig/#allowSyntheticDefaultImports) :
     - Emulates a default export for modules that do not have one.
     - Also, `import * as X from "Y"` should ne ver be used since it only imports **_own properties_** of exported values.
   - [`"skipLibCheck": false`](https://www.typescriptlang.org/tsconfig/#skipLibCheck)
     - Ensures that types for the project are checked exhaustively at compilation.