[**my-awesome-typescript-project**](../README.md)

***

[my-awesome-typescript-project](../README.md) / src/code-narrowing

# src/code-narrowing

Code narrowing.

## Table of contents

* [1. Basic narrowing](#1-basic-narrowing)
* [2. Predicate-based narrowing](#2-predicate-based-narrowing)
* [3. Union-based narrowing](#3-union-based-narrowing)

## 1. Basic narrowing

### whichPrimitiveType()

```ts
function whichPrimitiveType(v): string;
```

Defined in: [src/code-narrowing.ts:26](https://github.com/mulekick/typescript-launchpad/blob/b15506df2d82d49328ac46657117606fe4ed18b8/src/code-narrowing.ts#L26)

`typeof` and `instanceof` based narrowing

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `v` | | [`ecmaPrimitives`](composed-types.md#ecmaprimitives) | [`ecmaSpecialCases`](composed-types.md#ecmaspecialcases) |

#### Returns

`string`

#### Remarks

* Test argument value against all supported types.
* Refer to the handbook for the [supported narrowing patterns](https://www.typescriptlang.org/docs/handbook/2/narrowing.html).

## 2. Predicate-based narrowing

### isExtended()

```ts
function isExtended(o): o is extendedShape;
```

Defined in: [src/code-narrowing.ts:59](https://github.com/mulekick/typescript-launchpad/blob/b15506df2d82d49328ac46657117606fe4ed18b8/src/code-narrowing.ts#L59)

Type predicate

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | | [`objectShape`](basic-types.md#objectshape) | [`extendedShape`](basic-types.md#extendedshape) |

#### Returns

`o is extendedShape`

#### Remarks

* Cannot extract declaration : the type predicate must be present in the function signature.
* If `isExtended` returns a boolean, o cannot be narrowed to `extendedShape` (see below).

***

### runPredicate()

```ts
function runPredicate(o): symbol;
```

Defined in: [src/code-narrowing.ts:73](https://github.com/mulekick/typescript-launchpad/blob/b15506df2d82d49328ac46657117606fe4ed18b8/src/code-narrowing.ts#L73)

Narrowing with predicate

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | | [`objectShape`](basic-types.md#objectshape) | [`extendedShape`](basic-types.md#extendedshape) |

#### Returns

`symbol`

#### Remarks

* Using predicates is part of building an efficient type system.
* The commented pattern is an equivalent implementation but considered unsafe by the compiler.
* As a result, ***type assertions should be paired with predicates as often as possible***.
* See also [assertion based narrowing](https://www.typescriptlang.org/docs/handbook/release-notes/typescript-3-7.html#assertion-functions) for node typescript.
* See also this [example](https://www.typescriptlang.org/docs/handbook/2/classes.html#this-types) that combines `this` with type predicates for narrowing.

## 3. Union-based narrowing

### processEvent()

```ts
function processEvent(o): string;
```

Defined in: [src/code-narrowing.ts:88](https://github.com/mulekick/typescript-launchpad/blob/b15506df2d82d49328ac46657117606fe4ed18b8/src/code-narrowing.ts#L88)

Narrowing with discriminated unions

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | [`event`](composed-types.md#event) |

#### Returns

`string`

#### Remarks

* This allows DRY for similar types and code narrowing in functions that accept the union as a parameter.
* `o` evaluates to `never` in the default case.
