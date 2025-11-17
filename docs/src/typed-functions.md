[**my-awesome-typescript-project**](../README.md)

***

[my-awesome-typescript-project](../README.md) / src/typed-functions

# src/typed-functions

Typed functions.

## Table of contents

* [1. Function type expressions](#1-function-type-expressions)
* [2. Construct signatures](#2-construct-signatures)
* [3. Typed function overloads](#3-typed-function-overloads)
* [4. Type annotations for `this`](#4-type-annotations-for-this)
* [5. Rest parameters and arguments](#5-rest-parameters-and-arguments)
* [6. `void` corner case](#6-void-corner-case)

## 1. Function type expressions

### basicFn

```ts
type basicFn = basicFn;
```

Defined in: [src/typed-functions.ts:32](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L32)

Typed function declaration

#### Remarks

* Function signatures are declared using ***function type expressions***.
* Static typing consistency will be checked for implementations at the codebase level.

***

### basic

```ts
const basic: basicFn;
```

Defined in: [src/typed-functions.ts:40](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L40)

Typed function implementation

#### Remarks

* Always separate signature declaration and function implementation (for clarity).

***

### restrictedFn()

```ts
type restrictedFn = (v) => string;
```

Defined in: [src/typed-functions.ts:48](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L48)

Function accepting an union type

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | `"union"` | `"type"` |

#### Returns

`string`

***

### restricted

```ts
const restricted: restrictedFn;
```

Defined in: [src/typed-functions.ts:54](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L54)

Pass a literal type as an argument

## 2. Construct signatures

### shapeConstructor()

```ts
type shapeConstructor = () => 
  | objectShape
  | extendedShape;
```

Defined in: [src/typed-functions.ts:74](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L74)

Construct signature

#### Returns

| [`objectShape`](basic-types.md#objectshape)
| [`extendedShape`](basic-types.md#extendedshape)

#### Remarks

* `new` can be used in typescript to create signature for constructor functions.

***

### createObject()

```ts
function createObject(C): 
  | objectShape
  | extendedShape;
```

Defined in: [src/typed-functions.ts:82](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L82)

Construct signature usage

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `C` | [`shapeConstructor`](#shapeconstructor) |

#### Returns

| [`objectShape`](basic-types.md#objectshape)
| [`extendedShape`](basic-types.md#extendedshape)

## 3. Typed function overloads

### processEventWithDate()

#### Call Signature

```ts
function processEventWithDate(one, two?): string;
```

Defined in: [src/typed-functions.ts:105](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L105)

Function overloads implementation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `one` | [`event`](composed-types.md#event) |
| `two?` | `Date` |

##### Returns

`string`

##### Remarks

* Reminder : ECMA [does not natively support overloads](https://developer.mozilla.org/en-US/search?q=overloads).
* However, typescript allows overloading functions with [***compatible overload signatures***](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads).
* Typescript only recognizes overload signatures (the ***implementation signature*** is ***hidden*** from the rest of the code).
* The following example defines 2 overload signatures for a specific implementation (the use of function declaration is required).
* Typescript makes the date argument mandatory for the second overload even though it is not in the implementation.
* Best practices :
  1. Always prefer parameters with union types instead of overloads when possible.
  2. Overloads can be used in class constructor functions as well if a generic class is not desired.

#### Call Signature

```ts
function processEventWithDate(one, two): string;
```

Defined in: [src/typed-functions.ts:106](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L106)

Function overloads implementation

##### Parameters

| Parameter | Type |
| ------ | ------ |
| `one` | `string` | `number` |
| `two` | `Date` |

##### Returns

`string`

##### Remarks

* Reminder : ECMA [does not natively support overloads](https://developer.mozilla.org/en-US/search?q=overloads).
* However, typescript allows overloading functions with [***compatible overload signatures***](https://www.typescriptlang.org/docs/handbook/2/functions.html#function-overloads).
* Typescript only recognizes overload signatures (the ***implementation signature*** is ***hidden*** from the rest of the code).
* The following example defines 2 overload signatures for a specific implementation (the use of function declaration is required).
* Typescript makes the date argument mandatory for the second overload even though it is not in the implementation.
* Best practices :
  1. Always prefer parameters with union types instead of overloads when possible.
  2. Overloads can be used in class constructor functions as well if a generic class is not desired.

## 4. Type annotations for `this`

### doItUsingThis()

```ts
type doItUsingThis = (this, value) => number;
```

Defined in: [src/typed-functions.ts:144](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L144)

Annotate `this` in a function type expression

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | | [`objectShape`](basic-types.md#objectshape) | [`extendedShape`](basic-types.md#extendedshape) |
| `value` | `string` |

#### Returns

`number`

#### Remarks

* The implementation is responsible for providing the actual value for `this` (see below).
* Note: typescript supports a special [`this` type](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types) for annotations as well.

***

### returnLength

```ts
const returnLength: doItUsingThis;
```

Defined in: [src/typed-functions.ts:154](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L154)

Type annotations for `this`.

#### Remarks

* The use of function declarations is required.
* This syntax triggers an eslint flag (disabled), but typescript is OK.

## 5. Rest parameters and arguments

### restParamsFn()

```ts
type restParamsFn<T> = (one, two, ...three) => string;
```

Defined in: [src/typed-functions.ts:168](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L168)

Generic function type expression with rest parameters.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `one` | `T` |
| `two` | `T` |
| ...`three` | `T`\[] |

#### Returns

`string`

***

### fnAcceptRestParams

```ts
const fnAcceptRestParams: restParamsFn<
  | number
  | {
  prop: number;
}>;
```

Defined in: [src/typed-functions.ts:174](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L174)

Implementation using typed rest parameters.

## 6. `void` corner case

### voidFn()

```ts
type voidFn = () => void;
```

Defined in: [src/typed-functions.ts:219](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L219)

`void` in function type expressions

#### Returns

`void`

#### Remarks

* There's a difference between using `void` as a return type in a function type expression vs as an annotation.

***

### valid

```ts
const valid: voidFn;
```

Defined in: [src/typed-functions.ts:228](https://github.com/mulekick/typescript-launchpad/blob/9d275799f8527fc70e0bd68e70215a77833b0104/src/typed-functions.ts#L228)

`void` as a return type annotation

#### Remarks

* Typescript is arguing a [very strange point here](https://www.typescriptlang.org/docs/handbook/2/functions.html#assignability-of-functions).
* See [here](https://github.com/Microsoft/TypeScript/wiki/FAQ#why-are-functions-returning-non-void-assignable-to-function-returning-void) and [there](https://eslint.org/docs/latest/rules/array-callback-return) for more information.
