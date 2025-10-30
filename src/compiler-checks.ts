/**
 * Built-in compiler checks.
 * @module
 * @remarks
 * - Illustrate how the compiler flags common errors as well as type-specific errors.
 */

/* eslint-disable prefer-arrow-callback */

// import primitives
import console from "node:console";

/*
 * Example variables.
 */
let message = `this is a message`;
let value: unknown = null;

/*
 * Non-callable types.
 */
value = message();
value = message.someprop();

/*
 * Typos.
 */
value = message.toLocaleLowercase();

/*
 * Uncalled functions.
 */
message = message.toLocaleLowerCase;

/*
 * Incorrect function calls.
 */
const greet = (person: string, date: Date): string => `Hello ${ person }, today is ${ date.toLocaleDateString() }!`;
value = greet(`Brendan`);
value = greet(`Maddison`, Date());
value = greet(`Leyna`, new Date());

/*
 * Flawed logic.
 */
value = Math.random() < 0.5 ? `a` : `b`;
if (value !== `a`) {
    // ...
} else if (value === `b`) {
    // Oops, unreachable
}

/*
 * Multi-layered typo detection + forbidding certain assignments on 'unknown' types.
 * Contextual typing: parameters are automatically given inferred types.
 */
// value = [ `Alice`, `Bob`, `Eve` ];
const typedValue: Array<string> = [ `Alice`, `Bob`, `Eve` ];
typedValue.forEach(s => {console.log(s.toUppercase());});
typedValue.forEach(function(s) {console.log(s.toUppercase());});

/*
 * Code narrowing example 1: primitive types.
 */
value = (id: number | string) => id.toUpperCase();
value = (id: number | string) => (typeof id === `string` ? id.toUpperCase() : id);

/*
 * Code narrowing example 2: object types.
 */
value = (x: string[] | string) => `Hello, ${ x.join(` and `) }`;
value = (x: string[] | string) => (x instanceof Array ? `Hello, ${ x.join(` and `) }` : `Hello, ${ x }`);
