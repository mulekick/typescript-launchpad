/**
 * Generic types.
 * @module
 * @showCategories
 * @categoryDescription 1. Generic shapes
 * @categoryDescription 2. Generic implementations
 * @categoryDescription 3. Generic functions
 * @categoryDescription 4. Constrained generics
 */

/* eslint-disable new-cap, @typescript-eslint/no-invalid-this */

// import modules
import {derivedClass, objectClass} from "./basic-types.ts";
import {createObject} from "./typed-functions.ts";

// import types
import type {extendedShape, objectShape} from "./basic-types.ts";

/**
 * Generic interface
 * @category 1. Generic shapes
 * @class
 * @remarks
 * - Defines public contracts (no need to define constructor).
 * - Read the [notes](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters) for best practices on accessors.
 */
export interface genericInterface<T> {
    setOne(one: T): void;
    getOne(): T;
}

/**
 * Generic class
 * @category 2. Generic implementations
 * @class
 * @remarks
 * - Can be made more adaptable if T is an object shape instead of a primitive type.
 * - Use indexed types to access object shape inner types and type private properties.
 * - Classes expressions are [a pain]() when made generic because of tsconfig's `isolatedDeclarations`.
 * - Some more advanced patterns have to be considered (see the observer implementation in design patterns for example).
 */
export class genericClass<T> implements genericInterface<T> {
    private one: T;
    constructor(one: T) {this.one = one;}
    setOne(one: T): void {this.one = one;}
    getOne(): T {return this.one;}
}

/**
 * Generic class usage
 * @category 2. Generic implementations
 * @remarks
 * - Removing the type annotation on the constructor call makes the compiler infer the type from the argument, avoid.
 * - [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) are useful for annotating exports of generic-based classes instances.
 */
export const e: InstanceType<typeof genericClass<string | null>> = new genericClass<string | null>(null);

/**
 * @hidden
 * @category 2. Generic implementations
 */
export const f: InstanceType<typeof genericClass<number>> = new genericClass<number>(0);

/**
 * Generic function type expression
 * @category 3. Generic functions
 * @remarks
 * - Declare a (simple here) function signature over 2 generic types.
 * - Returned value must be a tuple of types (subtype of the array).
 * - Best practices :
 *   1. Always use as few type parameters as possible.
 *   2. When possible, use the type parameter itself rather than constraining it.
 *   3. If a type parameter only appears in one location, strongly reconsider if you actually need it.
 * - The same result can be achieved with interfaces, however types are preferred.
 * - Note : _it is not possible to create generic enums and namespaces_.
 */
export type genericFn<T, U> = (a: T, b: U)=> [U, T];

/**
 * Function implementation using a generic
 * @category 3. Generic functions
 * @remarks
 * - Always separate signature declaration and function implementation (for clarity).
 * - Typescript can also [infer types](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions) from generic functions arguments.
 * - However, it is better to **_always provide functions implementations with specific types_** as seen below.
 */
export const generic: genericFn<string, number> = function(a, b) {
    return [ b, a ];
};

/**
 * @hidden
 * @category 3. Generic functions
 * @interface
 * @remarks
 * - The same result can be achieved with interfaces, however types are preferred.
 */
export interface interfaceFn<T, U> {
    (a: T, b: U): [U, T];
}

/**
 * @hidden
 * @category 3. Generic functions
 */
export const alsoGeneric: interfaceFn<string, number> = function(a, b) {
    return [ b, a ];
};

/**
 * Constrained generic types
 * @category 4. Constrained generics
 * @remarks
 * - Equivalent of `type constrainedFn<T> = T extends objectShape ? (o: T)=> string : never;`, which one is better is debatable.
 */
export type constrainedFn<T extends objectShape> = (o: T)=> string;

/**
 * Constrained function implementation and typing.
 * @category 4. Constrained generics
 * @remarks
 * - Type inference is possible in this case as well but also discouraged.
 * - Also see this [very important consideration](https://www.typescriptlang.org/docs/handbook/2/functions.html#working-with-constrained-values) on constraints.
 */
export const constrained: constrainedFn<objectShape | extendedShape> = o => `one: ${ o.one }, four: ${ o.four(o.one) }`;

/**
 * @hidden
 * @category 4. Constrained generics
 * @remarks
 * - `inferred` is correct even without type annotation.
 */
export const inferred: string = constrained(createObject(Math.random() < 0.5 ? objectClass : derivedClass));

/**
 * Constrained generic class.
 * @category 4. Constrained generics
 * @remarks
 * - Extending a generic interface to isolate declaration makes no point in this case.
 * - Note : **_ static class members cannot use the type parameters_**.
 * - See also this guide on how to set [defaults for type parameters](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-parameter-defaults).
 * - This example also illustrates the use of [indexed access types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html).
 */
export class constrainedGenericClass<T extends objectShape | extendedShape> {
    six: T;
    seven: T[`three`];
    constructor(z: T) {
        this.six = z;
        this.seven = this.six.three;
    }

    eight(): number {
        return this.seven(this.six.one);
    }
}

/**
 * Union of callable object properties.
 * @category 4. Constrained generics
 * @remarks
 * - `keyof` doesn't work here, keys must be declared using a dedicated union type.
 */
export type callableProps = `three` | `four`;

/**
 * Generic callable object type.
 * @category 4. Constrained generics
 * @remarks
 * - From there, any object that matches the generic type can be made callable.
 */
export type makeCallable<T extends objectShape, R extends callableProps> = {
    (this: T, ...s: Parameters<T[R]>): ReturnType<T[R]>;
};

/**
 * Type an existing object shape as callable.
 * @category 4. Constrained generics
 * @remarks
 * - Use the generic to bind the object call signature to on if its methods.
 */
export type callableLiteral = objectShape & makeCallable<objectShape, `three`>;

/**
 * Implement a typed callable object literal.
 * @category 4. Constrained generics
 * @remarks
 * - Declare literal as a function then add missing keys, compiler OK.
 */
export const callThisLiteral: callableLiteral = function(s) {return this.three(s);};
callThisLiteral.one = `other`;
callThisLiteral.two = 1;
callThisLiteral.three = s => s.length * 3;
callThisLiteral.four = s => s.toUpperCase();