/**
 * Code narrowing.
 * @module
 * @showCategories
 * @categoryDescription 1. Basic narrowing
 * @categoryDescription 2. Predicate-based narrowing
 * @categoryDescription 3. Union-based narrowing
 */

/* eslint-disable @typescript-eslint/no-shadow */

// import modules
import {events} from "./composed-types.ts";

// import types
import type {extendedShape, objectShape} from "./basic-types.ts";
import type {ecmaPrimitives, ecmaSpecialCases, event} from "./composed-types.ts";

/**
 * `typeof` and `instanceof` based narrowing
 * @category 1. Basic narrowing
 * @remarks
 * - Test argument value against all supported types.
 * - Refer to the handbook for the [supported narrowing patterns](https://www.typescriptlang.org/docs/handbook/2/narrowing.html).
 */
export const whichPrimitiveType = (v: ecmaPrimitives | ecmaSpecialCases): string => {
    let result = ``;
    switch (true) {
    case typeof v === `string` :
        result = `${ v } is a string`;
        break;
    case typeof v === `boolean` || typeof v === `undefined` :
        result = `'${ String(v) }' is a ${ typeof v }`;
        break;
    case v === null :
        result = `'${ String(v) }' is null`;
        break;
    case typeof v === `number` || typeof v === `bigint` || typeof v === `symbol` :
        result = `'${ v.toString() }' is a ${ typeof v }`;
        break;
    case typeof v === `function` :
        // eslint-disable-next-line @typescript-eslint/no-unsafe-call
        result = `v is a callable function that returns ${ String(v()) }`;
        break;
    default :
        result = `${ JSON.stringify(v) } is an object`;
        break;
    }
    return result;
};

/**
 * Type predicate
 * @category 2. Predicate-based narrowing
 * @remarks
 * - Cannot extract declaration : the type predicate must be present in the function signature.
 * - If `isExtended` returns a boolean, o cannot be narrowed to `extendedShape` (see below).
 */
export const isExtended = function(o: objectShape | extendedShape): o is extendedShape {
    return typeof (o as extendedShape).five === `symbol`;
};

/**
 * Narrowing with predicate
 * @category 2. Predicate-based narrowing
 * @remarks
 * - Using predicates is part of building an efficient type system.
 * - The commented pattern is an equivalent implementation but considered unsafe by the compiler.
 * - As a result, **_type assertions should be paired with predicates as often as possible_**.
 * - See also [assertion based narrowing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) for node typescript.
 * - See also this [example](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types) that combines `this` with type predicates for narrowing.
 */
export const runPredicate = (o: objectShape | extendedShape): symbol => {
    if (isExtended(o))
        return o.five;
    // else if (typeof (o as extendedShape).five === `symbol`)
    //     return o.five;
    return Symbol(o.one);
};

/**
 * Narrowing with discriminated unions
 * @category 3. Union-based narrowing
 * @remarks
 * - This allows DRY for similar types and code narrowing in functions that accept the union as a parameter.
 * - `o` evaluates to `never` in the default case.
 */
export const processEvent = (o: event): string => {
    switch (o.eventType) {
    case events.EVENT_SERVER :
        return `processing event on server ${ String(o.serverId) }`;
    case events.EVENT_USER :
        return `processing event for user ${ o.userName }`;
    default :
        throw new TypeError(`unrecognized event type: ${ JSON.stringify(o) }`);
    }
};