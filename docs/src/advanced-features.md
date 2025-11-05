[**my-awesome-typescript-project**](../README.md)

***

[my-awesome-typescript-project](../README.md) / src/advanced-features

# src/advanced-features

Advanced features.

## 1. `keyof` and `typeof` operators

### typedOverloads

```ts
type typedOverloads = typeof processEventWithDate;
```

Defined in: [src/advanced-features.ts:29](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L29)

`typeof` operator usage

#### Remarks

- `typeof` infers types from implementations and **_only applies to identifiers_**.

***

### unionOfKeys

```ts
type unionOfKeys = keyof {
  nine: symbol;
  ten: {
     eleven: number;
  };
  twelve: null;
  999: 3;
};
```

Defined in: [src/advanced-features.ts:38](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L38)

`keyof` operator usage

#### Remarks

- `keyof` produces a union type from the keys of the targeted type.
- `keyof` constructed unions can be constrained / filtered using intersection types.

## 2. Advanced types

### typeFromKeys

```ts
type typeFromKeys = objectShape["one" | "three"];
```

Defined in: [src/advanced-features.ts:59](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L59)

Indexed access types

#### Remarks

- Indexed access types can return types from an union of keys of an existing type.
- Replacing the union with an intersection evaluates the returned type to `never`.

***

### remapIndexesToKeys

```ts
type remapIndexesToKeys<T> = { [prop in keyof T as string | symbol]: T[prop] };
```

Defined in: [src/advanced-features.ts:76](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L76)

Mapped types

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

#### Remarks

- Used to batch process keys from types in various ways to create new types.
- Only use in very advanced use cases, see the [docs](https://www.typescriptlang.org/docs/handbook/2/mapped-types.html) if further info is needed.

***

### numericMap

```ts
const numericMap: remapIndexesToKeys<typeof arrayAsTuple>;
```

Defined in: [src/advanced-features.ts:87](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L87)

Create annotations from mapped types

#### Remarks

- Below is a basic example that turns an array like type into a map like one.
- Original key type `number` is mapped to `string | symbol`.

***

### joe

```ts
type joe = "joe";
```

Defined in: [src/advanced-features.ts:96](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L96)

Template literal types

#### Remarks

- Same syntax as ECMA template literals, only work with literal types or unions of those.
- Blatantly overkill for the vast majority of use cases.

## 3. Index signatures

### objectDictFn()

```ts
type objectDictFn = () => {
[index: number]: 
  | objectShape
  | extendedShape;
  length: number;
};
```

Defined in: [src/advanced-features.ts:111](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L111)

Use index signature to "constrain" properties instead of declaring them

#### Returns

```ts
{
[index: number]: 
  | objectShape
  | extendedShape;
  length: number;
}
```

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `length` | `number` | [src/advanced-features.ts:113](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L113) |

#### Remarks

- Index signatures expand over array objects since element indexation is possible using [different types](https://www.typescriptlang.org/docs/handbook/2/objects.html#index-signatures).
- However, this is an extremely strange pattern and I guess that arrays, maps and objects are sufficient in most cases.

***

### objectDict

```ts
const objectDict: objectDictFn;
```

Defined in: [src/advanced-features.ts:122](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L122)

Create a typed dictionary object

#### Remarks

- See [here](https://medium.com/@craigdrabik/javascript-201-dictionary-pattern-91c00f207512) for a detailed explanation of the dictionary pattern.

## 4. Abstract classes

### `abstract` abstractImplementation

Defined in: [src/advanced-features.ts:145](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L145)

Abstract class implementation

#### Remarks

- Those are alternatives to interfaces / types that support implementation and initialization.
- The same can be achieved with subclasses extending a superclass which implement an interface.
- Members prefixed with `abstract` have to be implemented in subclasses.

#### Extended by

- [`implementAbstractProp`](#implementabstractprop)

#### Implements

- [`objectShape`](basic-types.md#objectshape)

#### Constructors

##### Constructor

```ts
new abstractImplementation(): abstractImplementation;
```

###### Returns

[`abstractImplementation`](#abstractimplementation)

#### Properties

| Property | Modifier | Type | Defined in |
| ------ | ------ | ------ | ------ |
| <a id="one"></a> `one` | `public` | `string` | [src/advanced-features.ts:146](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L146) |
| <a id="five"></a> `five` | `abstract` | `null` | [src/advanced-features.ts:149](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L149) |

#### Methods

##### three()

```ts
three(s): number;
```

Defined in: [src/advanced-features.ts:147](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L147)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`number`

###### Implementation of

[`objectShape`](basic-types.md#objectshape).[`three`](basic-types.md#three)

##### four()

```ts
four(s): string;
```

Defined in: [src/advanced-features.ts:148](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L148)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`string`

###### Implementation of

[`objectShape`](basic-types.md#objectshape).[`four`](basic-types.md#four)

***

### implementAbstractProp

Defined in: [src/advanced-features.ts:158](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L158)

Create subclass from an abstract class

#### Remarks

- Implement the abstract property + add another method.

#### Extends

- [`abstractImplementation`](#abstractimplementation)

#### Constructors

##### Constructor

```ts
new implementAbstractProp(): implementAbstractProp;
```

###### Returns

[`implementAbstractProp`](#implementabstractprop)

###### Inherited from

[`abstractImplementation`](#abstractimplementation).[`constructor`](#constructor)

#### Properties

| Property | Type | Default value | Overrides | Inherited from | Defined in |
| ------ | ------ | ------ | ------ | ------ | ------ |
| <a id="one-1"></a> `one` | `string` | `undefined` | - | [`abstractImplementation`](#abstractimplementation).[`one`](#one) | [src/advanced-features.ts:146](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L146) |
| <a id="five-1"></a> `five` | `null` | `null` | [`abstractImplementation`](#abstractimplementation).[`five`](#five) | - | [src/advanced-features.ts:159](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L159) |

#### Methods

##### three()

```ts
three(s): number;
```

Defined in: [src/advanced-features.ts:147](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L147)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`number`

###### Inherited from

[`abstractImplementation`](#abstractimplementation).[`three`](#three)

##### four()

```ts
four(s): string;
```

Defined in: [src/advanced-features.ts:148](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L148)

###### Parameters

| Parameter | Type |
| ------ | ------ |
| `s` | `string` |

###### Returns

`string`

###### Inherited from

[`abstractImplementation`](#abstractimplementation).[`four`](#four)

##### six()

```ts
six(): string;
```

Defined in: [src/advanced-features.ts:160](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L160)

###### Returns

`string`

## 5. Special import patterns

### fromNamespace

```ts
const fromNamespace: string;
```

Defined in: [src/advanced-features.ts:169](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L169)

Namespaced imports

#### Remarks

- Namespaces are the pre-ES6 typescript equivalent of modules.

***

### fromAmbientModule

```ts
const fromAmbientModule: string;
```

Defined in: [src/advanced-features.ts:178](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/advanced-features.ts#L178)

Ambient imports

#### Remarks

- Provide external type declarations for ECMA-only code.
- `tsconfig` must map the module name to the implementation file.
