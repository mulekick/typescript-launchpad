/**
 * Sample implementation file.
 * @module
 * @remarks
 * - It references a specific declaration file through a triple slash directive (see below).
 */

// eslint-disable-next-line spaced-comment
/// <reference types="./10 - declaration.d.ts" />

/**
 * Access interface.
 */
export const anotherObject: anotherShape = {
    aye: `hey`,
    bee: 0
};

/**
 * Access namespace.
 * @remarks
 * - Pollutes the global scope with variables that should live at module scope.
 */
anotherNamespace.cee = anotherObject;

/**
 * Overwrite namespace.
 * @remarks
 * - Uncomment the following to see an interesting error: the object shape is assumed to be its type as well.
 * - Conclusion : valid javascript isn't always valid ts.
 */

// const anotherNamespace = {a: null};
// anotherNamespace.cee = tutu;

/**
 * Access type.
 */
const say: returnVoid = something => `say ${ something }`;

/**
 * Access namespace.
 * @remarks
 * - Respect the declared namespace signature.
 */
anotherNamespace.say = say;