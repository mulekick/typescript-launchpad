/**
 * Typed functions.
 * @module
 * @showCategories
 * @categoryDescription 1. Function type expressions
 * @categoryDescription 2. Construct signatures
 * @categoryDescription 3. Typed function overloads
 * @categoryDescription 4. Type annotations for `this`
 * @categoryDescription 5. Rest parameters and arguments
 * @categoryDescription 6. `void` corner case
 */

/* eslint-disable @typescript-eslint/no-shadow, @typescript-eslint/no-unused-vars */

// import modules
import {objectClass, derivedClass, original, literal} from "./1 - basic types.ts";
import {events} from "./2 - composed types.ts";
import {runPredicate} from "./3 - code narrowing.ts";

// import types
import type {extendedShape, objectShape} from "./1 - basic types.ts";
import type {event} from "./2 - composed types.ts";

/**
 * Typed function declaration
 * @category 1. Function type expressions
 * @useDeclaredType
 * @remarks
 * - Function signatures are declared using **_function type expressions_**.
 * - Static typing consistency will be checked for implementations at the codebase level.
 */
export type basicFn = (x: derivedClass)=> number;

/**
 * Typed function implementation
 * @category 1. Function type expressions
 * @remarks
 * - Always separate signature declaration and function implementation (for clarity).
 */
export const basic: basicFn = function(x) {
    return x.three(`hey`);
};

/**
 * Function accepting an union type
 * @category 1. Function type expressions
 */
export type restrictedFn = (v: `union` | `type`)=> string;

/**
 * Pass a literal type as an argument
 * @category 1. Function type expressions
 */
export const restricted: restrictedFn = v => `param is ${ v }`;

/**
 * @hidden
 * @category 1. Function type expressions
 */
export const good: string = restricted(literal.b);

/**
 * @hidden
 * @category 1. Function type expressions
 */
// export const bad: string = restricted(original.b);

/**
 * Construct signature
 * @category 2. Construct signatures
 * @remarks
 * - `new` can be used in typescript to create signature for constructor functions.
 */
export type shapeConstructor = {
    new (): objectShape | extendedShape;
};

/**
 * Construct signature usage
 * @category 2. Construct signatures
 */
export const createObject = (C: shapeConstructor): objectShape | extendedShape => new C();

/**
 * @hidden
 * @category 2. Construct signatures
 * @remarks
 * - `inferred` is correct even without type annotation.
 */
export const inferred: symbol = runPredicate(createObject(Math.random() < 0.5 ? objectClass : derivedClass));

/**
 * Function overloads implementation
 * @category 3. Typed function overloads
 * @remarks
 * - Reminder : ECMA [does not natively support overloads](https://developer.mozilla.org/en-US/search?q=overloads).
 * - However, typescript allows overloading functions with [**_compatible overload signatures_**](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads).
 * - Typescript only recognizes overload signatures (the **_implementation signature_** is **_hidden_** from the rest of the code).
 * - The following example defines 2 overload signatures for a specific implementation (the use of function declaration is required).
 * - Typescript makes the date argument mandatory for the second overload even though it is not in the implementation.
 * - Best practices :
 *   1. Always prefer parameters with union types instead of overloads when possible.
 *   2. Overloads can be used in class constructor functions as well if a generic class is not desired.
 */
export function processEventWithDate(one: event, two?: Date): string;
export function processEventWithDate(one: string | number, two: Date): string;
export function processEventWithDate(one: string | number | event, two?: Date): string {
    const getEventInfo = (ev: event): string => (ev.eventType === events.EVENT_SERVER ? `server ${ String(ev.serverId) }` : `user ${ ev.userName }`);
    const logEventWithNow = (ev: event): string => `processing event for ${ getEventInfo(ev) } at timestamp ${ String(Date.now()) }`;
    const logEventWithDate = (ev: event, d: Date): string => `processing event for ${ getEventInfo(ev) } at timestamp ${ String(d.getTime()) }`;
    const logEvent = (v: string | number, d?: Date): string => {
        let ev: event | null = null;
        if (typeof v === `number`)
            ev = {eventType: events.EVENT_SERVER, serverId: v};
        else if (typeof v === `string`)
            ev = {eventType: events.EVENT_USER, userName: v};
        else
            throw new TypeError(`incorrect value type ${ JSON.stringify(v) }`);
        // type correctly inferred at this stage ...
        if (d instanceof Date)
            return logEventWithDate(ev, d);
        return logEventWithNow(ev);
    };

    // overload 2 call
    if (typeof one === `string` || typeof one === `number`)
        return logEvent(one, two);
    // overload 1 call
    else if (Object.hasOwn(one, `eventType`) && two instanceof Date)
        return logEventWithDate(one, two);
    // overload 1 call (no date)
    else if (Object.hasOwn(one, `eventType`))
        return logEventWithNow(one);
    throw new Error(`no callable inner function`);
};

/**
 * Annotate `this` in a function type expression
 * @category 4. Type annotations for `this`
 * @remarks
 * - The implementation is responsible for providing the actual value for `this` (see below).
 * - Note: typescript supports a special [`this` type](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types) for annotations as well.
 */
export type doItUsingThis = (this: objectShape | extendedShape, value: string)=> number;

/**
 * Type annotations for `this`.
 * @category 4. Type annotations for `this`
 * @remarks
 * - The use of function declarations is required.
 * - This syntax triggers an eslint flag (disabled), but typescript is OK.
 */
// eslint-disable-next-line @typescript-eslint/no-invalid-this
export const returnLength: doItUsingThis = function(s) {return this.three(s);};

/**
 * @hidden
 * @category 4. Type annotations for `this`
 * @remarks
 * - `inferredAgain` is correct even without type annotation.
 */
export const inferredAgain: number = returnLength.bind(createObject(Math.random() < 0.5 ? objectClass : derivedClass))(`some string`);

/**
 * Generic function type expression with rest parameters.
 * @category 5. Rest parameters and arguments
 */
export type restParamsFn<T> = (one: T, two: T, ...three: Array<T>)=> string;

/**
 * Implementation using typed rest parameters.
 * @category 5. Rest parameters and arguments
 */
export const fnAcceptRestParams: restParamsFn<number | {prop: number}> = (one, two, ...three) => {
    const log = (x: unknown): string => `value ${ JSON.stringify(x) } type: ${ typeof x }`;
    let result = ``;
    result += log(one);
    result += log(two);
    three.forEach(x => {result += log(x);});
    return result;
};

/**
 * @hidden
 * @category 5. Rest parameters and arguments
 */
export type restArgsFn<T> = ()=> Array<T>;

/**
 * @hidden
 * @category 5. Rest parameters and arguments
 */
export const fnCreateArgsToRest: restArgsFn<{prop: number}> = () => {
    const rnd = (lb: number, ub: number): number => lb + Math.round(Math.random() * (ub - lb));
    return new Array(rnd(1, 5)).fill(null).map(() => ({prop: rnd(1, 100)}));
};

/**
 * @hidden
 * @category 5. Rest parameters and arguments
 * @remarks
 * - Applying literal inference on an array turns it into a readonly tuple type (subtype of array).
 * - It is worth noting that [tuples can also include rest elements](https://www.typescriptlang.org/docs/handbook/2/objects.html#tuple-types).
 */
export const arrayAsTuple = [ 1, 2, 3 ] as const;

/**
 * @hidden
 * @category 5. Rest parameters and arguments
 */
export const variadic: string = fnAcceptRestParams(...arrayAsTuple, ...fnCreateArgsToRest());

/**
 * `void` in function type expressions
 * @category 6. `void` corner case
 * @remarks
 * - There's a difference between using `void` as a return type in a function type expression vs as an annotation.
 */
export type voidFn = ()=> void;

/**
 * `void` as a return type annotation
 * @category 6. `void` corner case
 * @remarks
 * - Typescript is arguing a [very strange point here](https://www.typescriptlang.org/docs/handbook/2/functions.html#assignability-of-functions).
 * - See [here](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-functions-returning-non-void-assignable-to-function-returning-void) and [there](https://eslint.org/docs/latest/rules/array-callback-return) for more information.
 */
export const valid: voidFn = () => true;

/**
 * @hidden
 * @category 6. `void` corner case
 */
// export const notValid = (): void => true;