/**
 * Sample declaration file.
 * @module
 * @remarks
 * - Declaration files provides a way to declare types or values without providing implementations.
 * - `*.ts` files are **_implementation_** files that can contain types and executable code.
 * - `*.d.ts` files are **_declaration_** files that contain only type information.
 * - Best practice is of course to manage declarations files instead of letting tsc generate them.
 * - For instance, interface anotherShape is missing from the tsc emitted declaration file (see below).
 */

/**
 * Interface declaration.
 * @interface
 */
interface anotherShape {
    aye: string;
    bee: number;
}

/**
 * Type declaration.
 * @useDeclaredType
 */
type returnVoid = (a: string) => string;

/**
 * Namespace declaration.
 * @namespace
 */
declare namespace anotherNamespace {
    let cee: anotherShape;
    let say: returnVoid;
}