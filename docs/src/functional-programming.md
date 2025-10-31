[**my-awesome-typescript-project**](../README.md)

***

[my-awesome-typescript-project](../README.md) / src/functional-programming

# src/functional-programming

Functional programming.

## 1. Function type expressions for higher order functions

### TypedFunction()

```ts
type TypedFunction<R, T> = (...args) => T;
```

Defined in: [src/functional-programming.ts:17](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/functional-programming.ts#L17)

Generic function type

#### Type Parameters

| Type Parameter |
| ------ |
| `R` *extends* `unknown`[] |
| `T` |

#### Parameters

| Parameter | Type |
| ------ | ------ |
| ...`args` | `R` |

#### Returns

`T`

***

### WrapperFunction

```ts
type WrapperFunction<T> = T extends TypedFunction<infer Z, infer X> ? (fn) => (...args) => Promise<Awaited<X>> : never;
```

Defined in: [src/functional-programming.ts:23](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/functional-programming.ts#L23)

Generic higher-order function type

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

## 2. Typed higher order functions implementations

### wrapSyncFn

```ts
const wrapSyncFn: WrapperFunction<(...args) => string>;
```

Defined in: [src/functional-programming.ts:32](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/functional-programming.ts#L32)

Promisify sync function

#### Remarks

- This pattern allows for static typing of [hook-like functions](https://en.wikipedia.org/wiki/Hooking).
- The try / catch clause, promise resolution and rejection as well as parameter function call can be moved in any desired callback.

***

### wrapAsyncFn

```ts
const wrapAsyncFn: WrapperFunction<(...args) => Promise<number>>;
```

Defined in: [src/functional-programming.ts:47](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/functional-programming.ts#L47)

Promisify async function

#### Remarks

- Same as the above using an async function type + async / await.

## 3. Typed higher order functions usage

### promisedString

```ts
const promisedString: ReturnType<typeof wrapSyncFn>;
```

Defined in: [src/functional-programming.ts:62](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/functional-programming.ts#L62)

Usage: pass a sync function to a hook

#### Remarks

- Use code narrowing in the param function to match wrapper declared type

***

### promisedPromise

```ts
const promisedPromise: ReturnType<typeof wrapAsyncFn>;
```

Defined in: [src/functional-programming.ts:74](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/functional-programming.ts#L74)

Usage: pass an async function to a hook

#### Remarks

- Use code narrowing in the param function to match wrapper declared type
