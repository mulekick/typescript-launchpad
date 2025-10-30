/**
 * Conditional types.
 * @module
 * @showCategories
 * @categoryDescription 1. Constrain generics using conditions
 * @categoryDescription 2. The `infer` keyword
 * @categoryDescription 3. Distributed types
 */

// import types
import type {objectShape} from "./basic-types.ts";

/**
 * @hidden
 * @category 1. Constrain generics using conditions
 * @useDeclaredType
 */
export type shapeIfTrue = {prop: number};

/**
 * @hidden
 * @category 1. Constrain generics using conditions
 * @useDeclaredType
 */
export type shapeIfFalse = {prop: string};

/**
 * @hidden
 * @category 1. Constrain generics using conditions
 * @useDeclaredType
 */
export type shapeIfString = {prop: `is a string`};

/**
 * Create a conditional generic type with the `extends` keyword
 * @category 1. Constrain generics using conditions
 * @useDeclaredType
 * @remarks
 * - Conditionals work with any type (primitive, custom, indexed access, etc).
 */
export type conditional<T> = T extends objectShape ? shapeIfTrue : shapeIfFalse;

/**
 * Constrain a generic type using a condition
 * @category 1. Constrain generics using conditions
 * @useDeclaredType
 */
export type constrained<T> = T extends string ? shapeIfString : never;

/**
 * Type narrowing (type equivalent of code narrowing)
 * @category 1. Constrain generics using conditions
 * @useDeclaredType
 * @remarks
 * - Complex type narrowing can be achieved by `nesting` conditional types.
 */
export type typeNarrowing<T extends objectShape | string> = T extends objectShape ? conditional<T> : T extends string ? shapeIfString : never;

/**
 * @hidden
 * Trying to violate the conditional type
 * @category 1. Constrain generics using conditions
 */
// export const impossible: conditional<objectShape> = {prop: `can't happen`};

/**
 * @hidden
 * Trying to assign a type to `never`
 * @category 1. Constrain generics using conditions
 */
// export const alsoImpossible: constrained<number> = {prop: `is a string`};

/**
 * Type narrowing example 1
 * @category 1. Constrain generics using conditions
 */
export const possible: typeNarrowing<string> = {prop: `is a string`};

/**
 * Type narrowing example 2
 * @category 1. Constrain generics using conditions
 */
export const alsoPossible: typeNarrowing<objectShape> = {prop: 999};

/**
 * `infer` keyword.
 * @category 2. The `infer` keyword
 * @useDeclaredType
 * @remarks
 * - `infer` complements conditionals and cannot be used outside an extends clause.
 * - `infer` is used within conditionals to declare a type variable within the constraint.
 */
export type echoingType<T> = T extends infer U ? U : never;

/**
 * Simplest possible use of `infer`
 * @category 2. The `infer` keyword
 * @useDeclaredType
 * @remarks
 * - `infer` allows dynamic capture of types in thee extends clause and can be thought of as "unwrapping a type".
 */
export type echoedType = echoingType<number>;

/**
 * "Inner" type wrapper
 * @category 2. The `infer` keyword
 * @useDeclaredType
 */
export type layerOne<T> = {aye: `aye`; bee: T};

/**
 * "Outer" type wrapper
 * @category 2. The `infer` keyword
 * @useDeclaredType
 */
export type layerTwo<T> = {cee: `cee`; dee: T};

/**
 * @hidden
 * @category 2. The `infer` keyword
 */
export const wrappedNumber: layerTwo<layerOne<number>> = {cee: `cee`, dee: {aye: `aye`, bee: 999}};

/**
 * Unwrapping of nested types.
 * @category 2. The `infer` keyword
 * @useDeclaredType
 * @remarks
 * - Unwrap nested types using `infer` and conditionals.
 */
export type unwrap<T> = T extends layerTwo<infer U> ? U extends layerOne<infer Z> ? Z : never : never;

/**
 * @hidden
 * @category 2. The `infer` keyword
 */
export type unwrappedNumber = unwrap<typeof wrappedNumber>;

/**
 * Using generic type with inferred type.
 * @category 2. The `infer` keyword
 * @useDeclaredType
 * @remarks
 * - Returned types for constrained (shapeIfString) do not match supported types for typeNarrowing (objectShape | string).
 * - As a result, any type created from this generic evaluates to never.
 */
export type impossibleType<T> = T extends constrained<infer U extends objectShape | string> ? typeNarrowing<U> : never;

/**
 * @hidden
 * @category 2. The `infer` keyword
 */
// export const impossibleValue: impossibleType<string> = null;

/**
 * Distributed types.
 * @category 3. Distributed types
 * @useDeclaredType
 * @remarks
 * - The following example illustrates the difference beetween :
 *   1. Using an union type with a generic type.
 *   2. Distributing a generic type over a union of types.
 */

/**
 * Use an union type with a generic type
 * @category 3. Distributed types
 * @useDeclaredType
 */
export type NonDistributive<T> = Array<T>;

/**
 * Distribute a generic type over a union of types
 * @category 3. Distributed types
 * @useDeclaredType
 */
export type Distributive<T> = T extends unknown ? Array<T> : never;

/**
 * Non- distributive : each array element is a union of types
 * @category 3. Distributed types
 */
export const one: NonDistributive<string | symbol> = [ `aaa`, Symbol(`bbb`) ];

/**
 * @hidden
 * Opposite pattern, the array type is distributed over the union
 * @category 3. Distributed types
 */
export const two: Distributive<string | symbol> = [ `aaa`, `bbb` ];

/**
 * @hidden
 * @category 3. Distributed types
 */
export const three: Distributive<string | symbol> = [ Symbol(`aaa`), Symbol(`bbb`) ];

/**
 * @hidden
 * Compiler throws
 * @category 3. Distributed types
 */
// export const four: Distributive<string | symbol> = [ `aaa`, Symbol(`bbb`) ];