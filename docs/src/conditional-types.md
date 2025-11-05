[**my-awesome-typescript-project**](../README.md)

***

[my-awesome-typescript-project](../README.md) / src/conditional-types

# src/conditional-types

Conditional types.

## 1. Constrain generics using conditions

### conditional

```ts
type conditional<T> = conditional<T>;
```

Defined in: [src/conditional-types.ts:41](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L41)

Create a conditional generic type with the `extends` keyword

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Remarks

- Conditionals work with any type (primitive, custom, indexed access, etc).

***

### constrained

```ts
type constrained<T> = constrained<T>;
```

Defined in: [src/conditional-types.ts:48](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L48)

Constrain a generic type using a condition

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### typeNarrowing

```ts
type typeNarrowing<T> = typeNarrowing<T>;
```

Defined in: [src/conditional-types.ts:57](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L57)

Type narrowing (type equivalent of code narrowing)

#### Type Parameters

| Type Parameter |
| ------ |
| `T` *extends* [`objectShape`](basic-types.md#objectshape) \| `string` |

#### Remarks

- Complex type narrowing can be achieved by `nesting` conditional types.

***

### possible

```ts
const possible: typeNarrowing<string>;
```

Defined in: [src/conditional-types.ts:77](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L77)

Type narrowing example 1

***

### alsoPossible

```ts
const alsoPossible: typeNarrowing<objectShape>;
```

Defined in: [src/conditional-types.ts:83](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L83)

Type narrowing example 2

## 2. The `infer` keyword

### echoingType

```ts
type echoingType<T> = echoingType<T>;
```

Defined in: [src/conditional-types.ts:93](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L93)

`infer` keyword.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Remarks

- `infer` complements conditionals and cannot be used outside an extends clause.
- `infer` is used within conditionals to declare a type variable within the constraint.

***

### echoedType

```ts
type echoedType = number;
```

Defined in: [src/conditional-types.ts:102](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L102)

Simplest possible use of `infer`

#### Remarks

- `infer` allows dynamic capture of types in thee extends clause and can be thought of as "unwrapping a type".

***

### layerOne

```ts
type layerOne<T> = layerOne<T>;
```

Defined in: [src/conditional-types.ts:109](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L109)

"Inner" type wrapper

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### layerTwo

```ts
type layerTwo<T> = layerTwo<T>;
```

Defined in: [src/conditional-types.ts:116](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L116)

"Outer" type wrapper

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### unwrap

```ts
type unwrap<T> = unwrap<T>;
```

Defined in: [src/conditional-types.ts:131](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L131)

Unwrapping of nested types.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Remarks

- Unwrap nested types using `infer` and conditionals.

***

### impossibleType

```ts
type impossibleType<T> = impossibleType<T>;
```

Defined in: [src/conditional-types.ts:147](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L147)

Using generic type with inferred type.

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Remarks

- Returned types for constrained (shapeIfString) do not match supported types for typeNarrowing (objectShape | string).
- As a result, any type created from this generic evaluates to never.

## 3. Distributed types

### NonDistributive

```ts
type NonDistributive<T> = NonDistributive<T>;
```

Defined in: [src/conditional-types.ts:170](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L170)

Use an union type with a generic type

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### Distributive

```ts
type Distributive<T> = Distributive<T>;
```

Defined in: [src/conditional-types.ts:177](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L177)

Distribute a generic type over a union of types

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### one

```ts
const one: NonDistributive<string | symbol>;
```

Defined in: [src/conditional-types.ts:183](https://github.com/mulekick/typescript-launchpad/blob/f4a9cdb57480ce14a27a779a7e385a4a8e8e85ea/src/conditional-types.ts#L183)

Non- distributive : each array element is a union of types
