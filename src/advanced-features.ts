/**
 * Advanced features.
 * @module
 * @showCategories
 * @categoryDescription 1. `keyof` and `typeof` operators
 * @categoryDescription 2. Advanced types
 * @categoryDescription 3. Index signatures
 * @categoryDescription 4. Abstract classes
 * @categoryDescription 5. Special import patterns
 */

/* eslint-disable n/no-missing-import, import/no-unresolved */

// import primitives
import console from "node:console";

// import modules
import {derivedClass, objectClass} from "./basic-types.ts";
import {arrayAsTuple, createObject, processEventWithDate} from "./typed-functions.ts";

// import types
import type {extendedShape, objectShape} from "./basic-types.ts";

/**
 * `typeof` operator usage
 * @category 1. `keyof` and `typeof` operators
 * @remarks
 * - `typeof` infers types from implementations and **_only applies to identifiers_**.
 */
export type typedOverloads = typeof processEventWithDate;

/**
 * `keyof` operator usage
 * @category 1. `keyof` and `typeof` operators
 * @remarks
 * - `keyof` produces a union type from the keys of the targeted type.
 * - `keyof` constructed unions can be constrained / filtered using intersection types.
 */
export type unionOfKeys = keyof {nine: symbol; ten: {eleven: number}; twelve: null; [999]: 3};

/**
 * @hidden
 * @category 1. `keyof` and `typeof` operators
 */
export type unionOfNumKeys = number & unionOfKeys;

/**
 * @hidden
 * @category 1. `keyof` and `typeof` operators
 */
export type unionOfStrKeys = string & unionOfKeys;

/**
 * Indexed access types
 * @category 2. Advanced types
 * @remarks
 * - Indexed access types can return types from an union of keys of an existing type.
 * - Replacing the union with an intersection evaluates the returned type to `never`.
 */
export type typeFromKeys = objectShape[`one` | `three`];

/**
 * @hidden
 * @category 2. Advanced types
 * @remarks
 * - Types can be returned from array like types as well using indices.
 */
export type typeFromIndexes = typeof arrayAsTuple[1 | 2];

/**
 * Mapped types
 * @category 2. Advanced types
 * @remarks
 * - Used to batch process keys from types in various ways to create new types.
 * - Only use in very advanced use cases, see the [docs](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) if further info is needed.
 */
export type remapIndexesToKeys<T> = {
    [prop in keyof T as string | symbol]: T[prop]
};

/**
 * Create annotations from mapped types
 * @category 2. Advanced types
 * @remarks
 * - Below is a basic example that turns an array like type into a map like one.
 * - Original key type `number` is mapped to `string | symbol`.
 */
export const numericMap: remapIndexesToKeys<typeof arrayAsTuple> = {a: 1, b: 2, [Symbol(`c`)]: 3};

/**
 * Template literal types
 * @category 2. Advanced types
 * @remarks
 * - Same syntax as ECMA template literals, only work with literal types or unions of those.
 * - Blatantly overkill for the vast majority of use cases.
 */
export type joe = `joe`;

/**
 * @hidden
 * @category 2. Advanced types
 */
export type greeting = `hey ${ joe }`;

/**
 * Use index signature to "constrain" properties instead of declaring them
 * @category 3. Index signatures
 * @remarks
 * - Index signatures expand over array objects since element indexation is possible using [different types](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures).
 * - However, this is an extremely strange pattern and I guess that arrays, maps and objects are sufficient in most cases.
 */
export type objectDictFn = ()=> {
    [index: number]: objectShape | extendedShape;
    length: number;
};

/**
 * Create a typed dictionary object
 * @category 3. Index signatures
 * @remarks
 * - See [here](https://medium.com/@craigdrabik/javascript-201-dictionary-pattern-91c00f207512) for a detailed explanation of the dictionary pattern.
 */
export const objectDict: objectDictFn = () => {
    const r = [];
    for (let i = 0; i < 10; i++)
        r.push(createObject(Math.random() < 0.5 ? objectClass : derivedClass));
    return r;
};

/**
 * @hidden
 * @category 3. Index signatures
 * @remarks
 * - `inferred` is correct even without type annotation.
 */
export const inferred: objectShape | extendedShape = objectDict()[1];

/**
 * Abstract class implementation
 * @category 4. Abstract classes
 * @remarks
 * - Those are alternatives to interfaces / types that support implementation and initialization.
 * - The same can be achieved with subclasses extending a superclass which implement an interface.
 * - Members prefixed with `abstract` have to be implemented in subclasses.
 */
export abstract class abstractImplementation implements objectShape {
    one = `literal one`;
    three = (s: string): number => 1e3 - (s.length + this.one.length);
    four = (s: string): string => `param: ${ s } objects prop : ${ this.one } `;
    abstract five: null;
}

/**
 * Create subclass from an abstract class
 * @category 4. Abstract classes
 * @remarks
 * - Implement the abstract property + add another method.
 */
export class implementAbstractProp extends abstractImplementation {
    five = null;
    six(): typeof this.one {return this.one;};
}

/**
 * Namespaced imports
 * @category 5. Special import patterns
 * @remarks
 * - Namespaces are the pre-ES6 typescript equivalent of modules.
 */
import {sampleSpace} from "./namespaces.ts";
console.log(`namespaced property: ${ sampleSpace.namespacedValue }`);

/**
 * Ambient imports
 * @category 5. Special import patterns
 * @remarks
 * - Provide external type declarations for ECMA-only code.
 * - `tsconfig` must map the module name to the implementation file.
 */
import {ambient} from "ambient";
console.log(`ambient module property: ${ ambient.one }`);