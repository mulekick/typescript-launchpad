/**
 * Composed types.
 * @module
 * @showCategories
 * @categoryDescription 1. Union types
 * @categoryDescription 2. Intersection types
 * @categoryDescription 3. Discriminated unions
 */

/**
 * Union of primitive types
 * @category 1. Union types
 * @useDeclaredType
 * @remarks
 * - Union of all ECMA [primitive types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures).
 * - Typescript provides the following types :
 *   1. any
 *   2. unknown
 *   3. never
 *   4. void
 * - Typescript-only types cannot be tested at execution time.
 */
export type ecmaPrimitives = boolean | bigint | number | string | symbol | undefined;

/**
 * Union of special types
 * @category 1. Union types
 * @useDeclaredType
 * @remarks
 * - Union of all ECMA type-like special cases.
 * - `null`, `function` and `object` are not primitive types (see below).
 * - `null` is null and `function` are special objects that are callable.
 */
export type ecmaSpecialCases = null | object;

/**
 * Empty intersection type
 * @category 2. Intersection types
 * @useDeclaredType
 * @remarks
 * - Evaluates to `never` since the consituents do not overlap.
 */
export type impossible = ecmaPrimitives & ecmaSpecialCases;

/**
 * Subtype from a union type
 * @category 2. Intersection types
 * @useDeclaredType
 * @remarks
 * - The unions overlap evaluate to a single value of type string.
 * - Thus, this intersection type evaluates to a [unit type](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unit-types).
 * - Parentheses can be used to constrain operator precedence.
 */
export type unit = ecmaPrimitives & (`unit` | null);

/**
 * @hidden
 * @category 2. Intersection types
 */
export type unitOrNull = ecmaPrimitives & `unit` | null;

/**
 * Discriminated union types
 * @category 3. Discriminated unions
 * @remarks
 * - Every constituent of a discriminated union type must have a common property set to a literal value.
 */
export type event = serverEvent | userEvent;

/**
 * @hidden
 * @category 3. Discriminated unions
 */
export enum events {
    EVENT_SERVER = `serverEvent`,
    EVENT_USER = `userEvent`
};

/**
 * @hidden
 * @category 3. Discriminated unions
 */
export interface serverEvent {
    eventType: events.EVENT_SERVER;
    serverId: number;
}

/**
 * @hidden
 * @category 3. Discriminated unions
 */
export interface userEvent {
    eventType: events.EVENT_USER;
    userName: string;
}