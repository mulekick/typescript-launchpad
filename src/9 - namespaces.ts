/**
 * Namespace.
 * @module
 * @remarks
 * - [Namespaces](https://www.typescriptlang.org/docs/handbook/namespaces.html) can export declarations as well as implementations.
 * - Reminder : ES6 modules support all namespaces features and should always be preferred.
 */

/* eslint-disable @typescript-eslint/no-namespace */

/**
 * Sample namespace
 * @namespace
 */
export namespace sampleSpace {
    export type namespacedType = `namespaced` | `type`;
    export const namespacedValue: namespacedType = `namespaced`;
}