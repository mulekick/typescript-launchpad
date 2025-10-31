[**my-awesome-typescript-project**](../../README.md)

***

[my-awesome-typescript-project](../../README.md) / src/generic-types

# src/generic-types

Generic types.

## 1. Generic shapes

### genericInterface

Defined in: [src/generic-types.ts:28](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L28)

Generic interface

#### Remarks

- Defines public contracts (no need to define constructor).
- Read the [notes](https://www.typescriptlang.org/docs/handbook/2/classes.html#getters--setters) for best practices on accessors.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Methods

##### setOne()

```ts
setOne(one): void;
```

Defined in: [src/generic-types.ts:29](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L29)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `one` | `T` |

###### Returns

`void`

##### getOne()

```ts
getOne(): T;
```

Defined in: [src/generic-types.ts:30](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L30)

###### Returns

`T`

## 2. Generic implementations

### genericClass

Defined in: [src/generic-types.ts:42](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L42)

Generic class

#### Remarks

- Can be made more adaptable if T is an object shape instead of a primitive type.
- Use indexed types to access object shape inner types and type private properties.
- Class expressions are a pain when made generic because of tsconfig's `isolatedDeclarations`, avoid.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Implements

- [`genericInterface`](#genericinterface)\<`T`\>

#### Constructors

##### Constructor

```ts
new genericClass<T>(one): genericClass<T>;
```

Defined in: [src/generic-types.ts:44](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L44)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `one` | `T` |

###### Returns

[`genericClass`](#genericclass)\<`T`\>

#### Methods

##### setOne()

```ts
setOne(one): void;
```

Defined in: [src/generic-types.ts:45](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L45)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `one` | `T` |

###### Returns

`void`

###### Implementation of

[`genericInterface`](#genericinterface).[`setOne`](#setone)

##### getOne()

```ts
getOne(): T;
```

Defined in: [src/generic-types.ts:46](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L46)

###### Returns

`T`

###### Implementation of

[`genericInterface`](#genericinterface).[`getOne`](#getone)

***

### e

```ts
const e: InstanceType<typeof genericClass>;
```

Defined in: [src/generic-types.ts:56](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L56)

Generic class usage

#### Remarks

- Removing the type annotation on the constructor call makes the compiler infer the type from the argument, avoid.
- [Utility types](https://www.typescriptlang.org/docs/handbook/utility-types.html) are useful for annotating exports of generic-based classes instances.

## 3. Generic functions

### genericFn()

```ts
type genericFn<T, U> = (a, b) => [U, T];
```

Defined in: [src/generic-types.ts:77](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L77)

Generic function type expression

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |
| `U` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `a` | `T` |
| `b` | `U` |

#### Returns

\[`U`, `T`\]

#### Remarks

- Declare a (simple here) function signature over 2 generic types.
- Returned value must be a tuple of types (subtype of the array).
- Best practices :
  1. Always use as few type parameters as possible.
  2. When possible, use the type parameter itself rather than constraining it.
  3. If a type parameter only appears in one location, strongly reconsider if you actually need it.
- The same result can be achieved with interfaces, however types are preferred.
- Note : _it is not possible to create generic enums and namespaces_.

***

### generic

```ts
const generic: genericFn<string, number>;
```

Defined in: [src/generic-types.ts:87](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L87)

Function implementation using a generic

#### Remarks

- Always separate signature declaration and function implementation (for clarity).
- Typescript can also [infer types](https://www.typescriptlang.org/docs/handbook/2/functions.html#generic-functions) from generic functions arguments.
- However, it is better to **_always provide functions implementations with specific types_** as seen below.

## 4. Constrained generics

### constrainedFn()

```ts
type constrainedFn<T> = (o) => string;
```

Defined in: [src/generic-types.ts:116](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L116)

Constrained generic types

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`objectShape`](../basic-types.md#objectshape) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `o` | `T` |

#### Returns

`string`

#### Remarks

- Equivalent of `type constrainedFn<T> = T extends objectShape ? (o: T)=> string : never;`, which one is better is debatable.

***

### constrained

```ts
const constrained: constrainedFn<
  | objectShape
| extendedShape>;
```

Defined in: [src/generic-types.ts:125](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L125)

Constrained function implementation and typing.

#### Remarks

- Type inference is possible in this case as well but also discouraged.
- Also see this [very important consideration](https://www.typescriptlang.org/docs/handbook/2/functions.html#working-with-constrained-values) on constraints.

***

### constrainedGenericClass

Defined in: [src/generic-types.ts:144](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L144)

Constrained generic class.

#### Remarks

- Extending a generic interface to isolate declaration makes no point in this case.
- Note : **_ static class members cannot use the type parameters_**.
- See also this guide on how to set [defaults for type parameters](https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-parameter-defaults).
- This example also illustrates the use of [indexed access types](https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html).

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* \| [`objectShape`](../basic-types.md#objectshape) \| [`extendedShape`](../basic-types.md#extendedshape) |

#### Constructors

##### Constructor

```ts
new constrainedGenericClass<T>(z): constrainedGenericClass<T>;
```

Defined in: [src/generic-types.ts:147](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L147)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `z` | `T` |

###### Returns

[`constrainedGenericClass`](#constrainedgenericclass)\<`T`\>

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="six"></a> `six` | `T` | [src/generic-types.ts:145](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L145) |
| <a id="seven"></a> `seven` | `T`\[`"three"`\] | [src/generic-types.ts:146](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L146) |

#### Methods

##### eight()

```ts
eight(): number;
```

Defined in: [src/generic-types.ts:152](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L152)

###### Returns

`number`

***

### callableProps

```ts
type callableProps = "three" | "four";
```

Defined in: [src/generic-types.ts:163](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L163)

Union of callable object properties.

#### Remarks

- `keyof` doesn't work here, keys must be declared using a dedicated union type.

***

### makeCallable()

```ts
type makeCallable<T, R> = (this, ...s) => ReturnType<T[R]>;
```

Defined in: [src/generic-types.ts:171](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L171)

Generic callable object type.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`objectShape`](../basic-types.md#objectshape) |
| `R` *extends* [`callableProps`](#callableprops) |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `this` | `T` |
| ...`s` | `Parameters`\<`T`\[`R`\]\> |

#### Returns

`ReturnType`\<`T`\[`R`\]\>

#### Remarks

- From there, any object that matches the generic type can be made callable.

***

### callableLiteral

```ts
type callableLiteral = objectShape & makeCallable<objectShape, "three">;
```

Defined in: [src/generic-types.ts:181](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L181)

Type an existing object shape as callable.

#### Remarks

- Use the generic to bind the object call signature to on if its methods.

***

### callThisLiteral

```ts
const callThisLiteral: callableLiteral;
```

Defined in: [src/generic-types.ts:189](https://github.com/mulekick/typescript-launchpad/blob/d8ac85f697195820831ce6b398ef2aea71cddc66/src/generic-types.ts#L189)

Implement a typed callable object literal.

#### Remarks

- Declare literal as a function then add missing keys, compiler OK.
