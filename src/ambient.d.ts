/**
 * Ambient module declaration.
 * @module
 * @remarks
 * - Declaration and implementation live in independant modules.
 * - The module name has to be added to tsconfig's `path` directive for correct resolution.
 * - Typescript describes "ambient declarations" as declarations that don't define implementations.
 */

/**
 * Declare interface
 * @interface
 */
interface ambientShape {
    one: string;
    two: () => string;
    three: Promise<string>;
}

/**
 * Declare module
 * @remarks
 * - The `declare` keyword is used to describe ambient declarations.
 */
declare module "ambient" {
    export const ambient: ambientShape;
}