/**
 * Functional programming.
 * @module
 * @showCategories
 * @categoryDescription 1. Function type expressions for higher order functions
 * @categoryDescription 2. Typed higher order functions implementations
 * @categoryDescription 3. Typed higher order functions usage
 * @remarks
 * - Write higher order functions that :
 *   1. Accept a function with a variadic number of parameters as an argument.
 *   2. The parameter function can be sync or async, return any type and its arguments can be of any type.
 *   3. The returned function returns a promise that resolves with the returned value of the parameter function.
 */

// import primitives
import console from "node:console";

/**
 * Generic function type
 * @category 1. Function type expressions for higher order functions
 */
export type TypedFunction<R extends Array<unknown>, T> = (...args: R)=> T;

/**
 * Generic higher-order function type
 * @category 1. Function type expressions for higher order functions
 */
export type WrapperFunction<T> = T extends TypedFunction<infer Z, infer X> ? (fn: T)=> (...args: Z)=> Promise<Awaited<X>> : never;

/**
 * Promisify sync function
 * @category Typed higher order functions implementations
 * @remarks
 * - This pattern allows for static typing of [hook-like functions](https://en.wikipedia.org/wiki/Hooking).
 * - The try / catch clause, promise resolution and rejection as well as parameter function call can be moved in any desired callback.
 */
export const wrapSyncFn: WrapperFunction<(...args: [string])=> string> = fn => (...args) => new Promise((resolve, reject) => {
    try {
        const result = fn(...args);
        resolve(result);
    } catch (err: unknown) {
        reject(new Error(err instanceof Error ? err.message : `unknown error`));
    }
});

/**
 * Promisify async function
 * @category Typed higher order functions implementations
 * @remarks
 * - Same as the above using an async function type + async / await.
 */
export const wrapAsyncFn: WrapperFunction<(...args: [number, number])=> Promise<number>> = fn => async(...args) => {
    try {
        const result = await fn(...args);
        return result;
    } catch (err: unknown) {
        throw new Error(err instanceof Error ? err.message : `unknown error`);
    }
};

/**
 * Usage: pass a sync function to a hook
 * @category Typed higher order functions usage
 * @remarks
 * - Use code narrowing in the param function to match wrapper declared type
 */
export const promisedString: ReturnType<typeof wrapSyncFn> = wrapSyncFn(someName => {
    if (typeof someName === `string`)
        return `hey ${ someName }`;
    throw new TypeError(`type mismatch`);
});

/**
 * Usage: pass an async function to a hook
 * @category Typed higher order functions usage
 * @remarks
 * - Use code narrowing in the param function to match wrapper declared type
 */
export const promisedPromise: ReturnType<typeof wrapAsyncFn> = wrapAsyncFn((someNumber1, someNumber2) => new Promise((resolve, reject) => {
    if (typeof someNumber1 === `number` && typeof someNumber2 === `number`) {
        setTimeout(() => {resolve(someNumber1 + someNumber2);}, 1e3);
        return;
    }
    reject(new TypeError(`type mismatch`));
}));

/**
 * @hidden
 * @category Typed higher order functions usage
 */
void (async() => {
    try {
        console.log(await promisedString(`joe`));
        console.log(await promisedPromise(6, 5));
    } catch (err: unknown) {
        console.error(err instanceof Error ? err.message : `unknown error`);
    }
})();