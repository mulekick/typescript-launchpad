[**my-awesome-typescript-project**](../README.md)

***

[my-awesome-typescript-project](../README.md) / src/basic-types

# src/basic-types

Basic types.

## Table of contents

* [1. Object shapes](#1-object-shapes)
* [2. Object implementations](#2-object-implementations)
* [3. Literal types](#3-literal-types)

## 1. Object shapes

### objectShape

Defined in: [src/basic-types.ts:18](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L18)

Simple interface

#### Remarks

* Defines object shape: properties names, types, order, [optionality](https://www.typescriptlang.org/docs/handbook/2/objects.html#optional-properties).
* Interfaces can be [modified after creation](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#interfaces) but this should ***never*** be done.

#### Extended by

* [`extendedShape`](#extendedshape)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="one"></a> `one` | `string` | [src/basic-types.ts:19](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L19) |
| <a id="two"></a> `two?` | `number` | [src/basic-types.ts:20](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L20) |
| <a id="three"></a> `three` | (`s`) => `number` | [src/basic-types.ts:21](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L21) |
| <a id="four"></a> `four` | (`s`) => `string` | [src/basic-types.ts:22](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L22) |

***

### extendedShape

Defined in: [src/basic-types.ts:34](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L34)

Extended interface

#### Remarks

* Shows how the `extend` clause is used declaratively in typescript.
* Properties accept a `readonly` modifier.
* A single interface can extend multiple interfaces (separated with commas).

#### Extends

* [`objectShape`](#objectshape)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="one-1"></a> `one` | `public` | `string` | [`objectShape`](#objectshape).[`one`](#one) | [src/basic-types.ts:19](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L19) |
| <a id="two-1"></a> `two?` | `public` | `number` | [`objectShape`](#objectshape).[`two`](#two) | [src/basic-types.ts:20](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L20) |
| <a id="three-1"></a> `three` | `public` | (`s`) => `number` | [`objectShape`](#objectshape).[`three`](#three) | [src/basic-types.ts:21](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L21) |
| <a id="four-1"></a> `four` | `public` | (`s`) => `string` | [`objectShape`](#objectshape).[`four`](#four) | [src/basic-types.ts:22](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L22) |
| <a id="five"></a> `five` | `readonly` | `symbol` | - | [src/basic-types.ts:35](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L35) |

***

### extendedType

```ts
type extendedType = extendedType;
```

Defined in: [src/basic-types.ts:46](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L46)

Extended type

#### Remarks

* Equivalent of extending an interface, actually intersection type of both constituents.
* Reminder: a ***subtype*** always have more or more specific properties than its ***supertype***.

***

### derivedShape

Defined in: [src/basic-types.ts:57](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L57)

Create interface from implementation

#### Remarks

* This pattern can be used to [extend built-in objects](https://cancerberosgx.github.io/javascript-documentation-examples/examples/typedoc-tutorial-basic/docs/docco/src/index.html?text=Methods%20and%20Functions#methods-and-functions) and override their methods.

#### Extends

* [`objectClass`](#objectclass)

#### Properties

| Property | Modifier | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ |
| <a id="five-1"></a> `five` | `readonly` | `symbol` | - | [src/basic-types.ts:58](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L58) |
| <a id="one-2"></a> `one` | `public` | `string` | [`objectClass`](#objectclass).[`one`](#one-3) | [src/basic-types.ts:101](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L101) |
| <a id="two-2"></a> `two` | `public` | `number` | [`objectClass`](#objectclass).[`two`](#two-3) | [src/basic-types.ts:102](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L102) |
| <a id="three-2"></a> `three` | `public` | (`s`) => `number` | [`objectClass`](#objectclass).[`three`](#three-3) | [src/basic-types.ts:103](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L103) |

#### Methods

##### four()

```ts
four(s): string;
```

Defined in: [src/basic-types.ts:110](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`string`

###### Inherited from

[`objectClass`](#objectclass).[`four`](#four-4)

## 2. Object implementations

### objectLiteral

```ts
const objectLiteral: objectShape;
```

Defined in: [src/basic-types.ts:67](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L67)

Simple object literal

#### Remarks

* The object keys and values conform to the interface.

***

### derivedLiteral

```ts
const derivedLiteral: derivedShape;
```

Defined in: [src/basic-types.ts:80](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L80)

Derived object literal

#### Remarks

* Same as `export const derivedLiteral: objectShape & extendedShape`.

***

### objectClass

Defined in: [src/basic-types.ts:100](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L100)

Simple class

#### Remarks

* The class implements the interface.
* Important: interface properties define [public contracts only](https://stackoverflow.com/questions/37791947/how-to-define-a-private-property-when-implementing-an-interface-in-typescript).
* An alternative is to use the interface to declare getters and setters of private properties.
* Reminder: `public`, `private`, `protected` and `readonly` modifiers are typescript only and [not supported by native ECMA](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes/Private_elements).
* When in doubt, refer to the [list of ECMA reserved words for javascript](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#reserved_words).
* Personal note : the [following interpretation](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-at-runtime-in-classes) involuntarily makes a case for using functional programming over classes.

#### Extended by

* [`derivedShape`](#derivedshape)
* [`derivedClass`](#derivedclass)

#### Implements

* [`objectShape`](#objectshape)

#### Constructors

##### Constructor

```ts
new objectClass(): objectClass;
```

Defined in: [src/basic-types.ts:104](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L104)

###### Returns

[`objectClass`](#objectclass)

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="one-3"></a> `one` | `string` | [src/basic-types.ts:101](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L101) |
| <a id="two-3"></a> `two` | `number` | [src/basic-types.ts:102](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L102) |
| <a id="three-3"></a> `three` | (`s`) => `number` | [src/basic-types.ts:103](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L103) |

#### Methods

##### four()

```ts
four(s): string;
```

Defined in: [src/basic-types.ts:110](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L110)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`string`

###### Implementation of

[`objectShape`](#objectshape).[`four`](#four)

***

### derivedClass

Defined in: [src/basic-types.ts:124](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L124)

Derived class

#### Remarks

* Illustrates ECMA `extends` vs typescript `implements`.
* Overridden methods have to be identified and cannot violate the superclass types.
* `super.someMethod()` can be used in overriden methods to access superclass method.

#### Extends

* [`objectClass`](#objectclass)

#### Implements

* [`extendedShape`](#extendedshape)

#### Constructors

##### Constructor

```ts
new derivedClass(): derivedClass;
```

Defined in: [src/basic-types.ts:126](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L126)

###### Returns

[`derivedClass`](#derivedclass)

###### Overrides

[`objectClass`](#objectclass).[`constructor`](#constructor)

#### Properties

| Property | Type | Inherited from | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="one-4"></a> `one` | `string` | [`extendedShape`](#extendedshape).[`one`](#one-1) [`objectClass`](#objectclass).[`one`](#one-3) | [src/basic-types.ts:101](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L101) |
| <a id="two-4"></a> `two` | `number` | [`extendedShape`](#extendedshape).[`two`](#two-1) [`objectClass`](#objectclass).[`two`](#two-3) | [src/basic-types.ts:102](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L102) |
| <a id="three-4"></a> `three` | (`s`) => `number` | [`extendedShape`](#extendedshape).[`three`](#three-1) [`objectClass`](#objectclass).[`three`](#three-3) | [src/basic-types.ts:103](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L103) |
| <a id="five-2"></a> `five` | `symbol` | - | [src/basic-types.ts:125](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L125) |

#### Methods

##### four()

```ts
four(s): string;
```

Defined in: [src/basic-types.ts:131](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L131)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`string`

###### Implementation of

[`extendedShape`](#extendedshape).[`four`](#four-1)

###### Overrides

[`objectClass`](#objectclass).[`four`](#four-4)

## 3. Literal types

### literal

```ts
const literal: {
  a: 0;
  b: "union";
};
```

Defined in: [src/basic-types.ts:148](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L148)

Create literal type from implementation

#### Type Declaration

| Name | Type | Default value | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="a"></a> `a` | `0` | `0` | [src/basic-types.ts:148](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L148) |
| <a id="b"></a> `b` | `"union"` | - | [src/basic-types.ts:148](https://github.com/mulekick/typescript-launchpad/blob/936c913f721b904058caa46397daea79fcd7966b/src/basic-types.ts#L148) |

#### Remarks

* Converting an object to a [literal type](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#literal-inference) using `as const` makes all its properties read-only.
