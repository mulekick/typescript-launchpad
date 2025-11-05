[**my-awesome-typescript-project**](../README.md)

***

[my-awesome-typescript-project](../README.md) / src/composed-types

# src/composed-types

Composed types.

## 1. Union types

### ecmaPrimitives

```ts
type ecmaPrimitives = ecmaPrimitives;
```

Defined in: [src/composed-types.ts:23](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/composed-types.ts#L23)

Union of primitive types

#### Remarks

- Union of all ECMA [primitive types](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Data_structures).
- Typescript provides the following types :
  1. any
  2. unknown
  3. never
  4. void
- Typescript-only types cannot be tested at execution time.

***

### ecmaSpecialCases

```ts
type ecmaSpecialCases = ecmaSpecialCases;
```

Defined in: [src/composed-types.ts:34](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/composed-types.ts#L34)

Union of special types

#### Remarks

- Union of all ECMA type-like special cases.
- `null`, `function` and `object` are not primitive types (see below).
- `null` is null and `function` are special objects that are callable.

## 2. Intersection types

### impossible

```ts
type impossible = never;
```

Defined in: [src/composed-types.ts:43](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/composed-types.ts#L43)

Empty intersection type

#### Remarks

- Evaluates to `never` since the consituents do not overlap.

***

### unit

```ts
type unit = "unit";
```

Defined in: [src/composed-types.ts:54](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/composed-types.ts#L54)

Subtype from a union type

#### Remarks

- The unions overlap evaluate to a single value of type string.
- Thus, this intersection type evaluates to a [unit type](https://www.typescriptlang.org/docs/handbook/typescript-in-5-minutes-func.html#unit-types).
- Parentheses can be used to constrain operator precedence.

## 3. Discriminated unions

### event

```ts
type event = serverEvent | userEvent;
```

Defined in: [src/composed-types.ts:68](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/composed-types.ts#L68)

Discriminated union types

#### Remarks

- Every constituent of a discriminated union type must have a common property set to a literal value.
