/**
 * Ambient module implementation.
 * @module
 * @remarks
 * - Declaration and implementation live in independant modules.
 * - Importing modules have to import the relevant [**_ambient module declaration_**](https://www.typescriptlang.org/docs/handbook/namespaces-and-modules.html) for correct type resolution.
 * - Typescript supports all [native ECMA module imports](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/import#forms_of_import_declarations).
 */

/**
 * JS only export
 */
export const ambient = {
    one: `one`,
    two: () => `two`,
    three: new Promise(r => {setImmediate(() => r(`three`));})
};