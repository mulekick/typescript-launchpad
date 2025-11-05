/**
 * Functional programming.
 * @module
 * @showCategories
 * @categoryDescription 1. Function type expressions for higher order functions
 * @categoryDescription 2. Typed higher order functions implementations
 * @categoryDescription 3. Typed higher order functions usage
 */

/* eslint-disable no-param-reassign */

// import primitives
import console from "node:console";
import {randomBytes} from "node:crypto";

/**
 * Generic function type
 * @category 1. Function type expressions for higher order functions
 */
export type TypedFunction<R extends Array<unknown>, T> = (...args: R)=> T;

/**
 * Generic higher-order function type
 * @category 1. Function type expressions for higher order functions
 */
export type PromisifyFunction<T> = T extends TypedFunction<infer Z, infer X> ? (fn: T)=> (...args: Z)=> Promise<Awaited<X>> : never;

/**
 * Another example
 * @category 1. Function type expressions for higher order functions
 */
export type TimeExecution<T> = T extends TypedFunction<infer Z, infer X> ? (fn: T)=> (...args: Z)=> {duration: number; result: X} : never;

/**
 * Promisify sync function
 * @category 2. Typed higher order functions implementations
 * @remarks
 * - This pattern allows for static typing of [hook-like functions](https://en.wikipedia.org/wiki/Hooking).
 * - The try / catch clause, promise resolution and rejection as well as parameter function call can be moved in any desired callback.
 */
export const promisifySyncFn: PromisifyFunction<(...args: [string])=> string> = fn => (...args) => new Promise((resolve, reject) => {
    try {
        const result = fn(...args);
        resolve(result);
    } catch (err: unknown) {
        reject(new Error(err instanceof Error ? err.message : `unknown error`));
    }
});

/**
 * Promisify async function
 * @category 2. Typed higher order functions implementations
 * @remarks
 * - Same as the above using an async function type + async / await.
 */
export const promisifyAsyncFn: PromisifyFunction<(...args: [number, number])=> Promise<number>> = fn => async(...args) => {
    try {
        const result = await fn(...args);
        return result;
    } catch (err: unknown) {
        throw new Error(err instanceof Error ? err.message : `unknown error`);
    }
};

/**
 * Time function execution
 * @category 2. Typed higher order functions implementations
 * @remarks
 * - Hook-like higher order function that accepts a function as a parameter
 * - It returns the return type of the function along with the execution duration
 */
export const timeExecutionHook: TimeExecution<(...args: [Array<string>])=> number> = fn => (...args) => {
    const start = new Date().getTime();
    const result = fn(...args);
    const duration = new Date().getTime() - start;
    return {result, duration};
};

/**
 * Usage: pass a sync function to a hook
 * @category 3. Typed higher order functions usage
 * @remarks
 * - Use code narrowing in the param function to match wrapper declared type
 */
export const promisedString: ReturnType<typeof promisifySyncFn> = promisifySyncFn(someName => {
    if (typeof someName === `string`)
        return `hey ${ someName }`;
    throw new TypeError(`type mismatch`);
});

/**
 * Usage: pass an async function to a hook
 * @category 3. Typed higher order functions usage
 * @remarks
 * - Use code narrowing in the param function to match wrapper declared type
 */
export const promisedPromise: ReturnType<typeof promisifyAsyncFn> = promisifyAsyncFn((someNumber1, someNumber2) => new Promise((resolve, reject) => {
    if (typeof someNumber1 === `number` && typeof someNumber2 === `number`) {
        setTimeout(() => {resolve(someNumber1 + someNumber2);}, 1e3);
        return;
    }
    reject(new TypeError(`type mismatch`));
}));

/**
 * Usage: pass an async function to a hook
 * @category 3. Typed higher order functions usage
 * @remarks
 * - Use code narrowing in the param function to match wrapper declared type
 */
export const timedCountAllChars: ReturnType<typeof timeExecutionHook> = timeExecutionHook((someStringArray: Array<string>): number => {
    if (someStringArray instanceof Array)
        return someStringArray.reduce((r, x) => (r += x.length || 0), 0);
    throw new TypeError(`type mismatch`);
});

/**
 * @hidden
 * @category 3. Typed higher order functions usage
 */
void (async() => {
    try {
        console.log(await promisedString(`joe`));
        console.log(await promisedPromise(6, 5));
        const rnd = (lb: number, ub: number): number => lb + Math.round(Math.random() * (ub - lb));
        const res = timedCountAllChars(new Array(1e6).fill(null).map(() => randomBytes(rnd(1, 256)).toString(`hex`)));
        console.log(`took ${ String(res.duration) } ms to count ${ String(res.result) } characters`);
    } catch (err: unknown) {
        console.error(err instanceof Error ? err.message : `unknown error`);
    }
})();