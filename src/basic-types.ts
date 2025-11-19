/**
 * Basic types.
 * @module
 * @showCategories
 * @categoryDescription 1. Object shapes
 * @categoryDescription 2. Object implementations
 * @categoryDescription 3. Literal types
 */

/**
 * Simple interface
 * @category 1. Object shapes
 * @interface
 * @remarks
 * - Defines object shape: properties names, types, order, [optionality](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties).
 * - Interfaces can be [modified after creation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) but this should **_never_** be done.
 */
export interface objectShape {
    one: string;
    two?: number;
    three: (s: string) => number;
    four: (s: string) => string;
}

/**
 * Extended interface
 * @category 1. Object shapes
 * @interface
 * @remarks
 * - Shows how the `extend` clause is used declaratively in typescript.
 * - Properties accept a `readonly` modifier.
 * - A single interface can extend multiple interfaces (separated with commas).
 */
export interface extendedShape extends objectShape {
    readonly five: symbol;
}

/**
 * Extended type
 * @category 1. Object shapes
 * @useDeclaredType
 * @remarks
 * - Equivalent of extending an interface, actually intersection type of both constituents.
 * - Reminder: a **_subtype_** always have more or more specific properties than its **_supertype_**.
 */
export type extendedType = objectShape & {
    readonly five: symbol;
};

/**
 * Create interface from implementation
 * @category 1. Object shapes
 * @interface
 * @remarks
 * - This pattern can be used to [extend built-in objects](https://cancerberosgx.github.io/javascript-documentation-examples/examples/typedoc-tutorial-basic/docs/docco/src/index.html?text=Methods%20and%20Functions#methods-and-functions) and override their methods.
 */
export interface derivedShape extends objectClass {
    readonly five: symbol;
}

/**
 * Simple object literal
 * @category 2. Object implementations
 * @remarks
 * - The object keys and values conform to the interface.
 */
export const objectLiteral: objectShape = {
    one: `value`,
    two: 0,
    three: s => s.length,
    four: s => s.toUpperCase()
};

/**
 * Derived object literal
 * @category 2. Object implementations
 * @remarks
 * - Same as `export const derivedLiteral: objectShape & extendedShape`.
 */
export const derivedLiteral: derivedShape = {
    one: `value`,
    two: 0,
    three: s => s.length,
    four: s => s.toUpperCase(),
    five: Symbol(`four`)
};

/**
 * Simple class
 * @category 2. Object implementations
 * @class
 * @remarks
 * - The class implements the interface.
 * - Important: interface properties define [public contracts only](https://stackoverflow.com/questions/37791947/how-to-define-a-private-property-when-implementing-an-interface-in-typescript).
 * - An alternative is to use the interface to declare getters and setters of private properties.
 * - Reminder: `public`, `private`, `protected` and `readonly` modifiers are typescript only and [not supported by native ECMA](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements).
 * - When in doubt, refer to the [list of ECMA reserved words for javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).
 * - Personal note : the [following interpretation](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-at-runtime-in-classes) involuntarily makes a case for using functional programming over classes.
 */
export class objectClass implements objectShape {
    one: string;
    two: number;
    three: (s: string) => number;
    constructor() {
        this.one = `value`;
        this.two = 0;
        this.three = s => s.length;
    }

    four(s: string): string {
        return `${ s.toUpperCase() } length is ${ String(this.three(s)) }`;
    }
}

/**
 * Derived class
 * @category 2. Object implementations
 * @class
 * @remarks
 * - Illustrates ECMA `extends` vs typescript `implements`.
 * - Overridden methods have to be identified and cannot violate the superclass types.
 * - `super.someMethod()` can be used in overriden methods to access superclass method.
 */
export class derivedClass extends objectClass implements extendedShape {
    five: symbol;
    constructor() {
        super();
        this.five = Symbol(`four`);
    }

    override four(s: string): string {
        return `${ s.toLowerCase() } length is ${ String(this.three(s)) }`;
    }
}

/**
 * @hidden
 * @category 3. Literal types
 */
export const original = {a: 0, b: `union`};

/**
 * Create literal type from implementation
 * @category 3. Literal types
 * @remarks
 * - Converting an object to a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference) using `as const` makes all its properties read-only.
 */
export const literal = {a: 0, b: `union`} as const;