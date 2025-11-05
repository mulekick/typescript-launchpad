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

Defined in: [src/functional-programming.ts:20](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L20)

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

### PromisifyFunction

```ts
type PromisifyFunction<T> = T extends TypedFunction<infer Z, infer X> ? (fn) => (...args) => Promise<Awaited<X>> : never;
```

Defined in: [src/functional-programming.ts:26](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L26)

Generic higher-order function type

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

***

### TimeExecution

```ts
type TimeExecution<T> = T extends TypedFunction<infer Z, infer X> ? (fn) => (...args) => {
  duration: number;
  result: X;
} : never;
```

Defined in: [src/functional-programming.ts:32](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L32)

Another example

#### Type Parameters

| Type Parameter |
| ------ |
| `T` |

## 2. Typed higher order functions implementations

### promisifySyncFn

```ts
const promisifySyncFn: PromisifyFunction<(...args) => string>;
```

Defined in: [src/functional-programming.ts:41](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L41)

Promisify sync function

#### Remarks

- This pattern allows for static typing of [hook-like functions](https://en.wikipedia.org/wiki/Hooking).
- The try / catch clause, promise resolution and rejection as well as parameter function call can be moved in any desired callback.

***

### promisifyAsyncFn

```ts
const promisifyAsyncFn: PromisifyFunction<(...args) => Promise<number>>;
```

Defined in: [src/functional-programming.ts:56](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L56)

Promisify async function

#### Remarks

- Same as the above using an async function type + async / await.

***

### timeExecutionHook

```ts
const timeExecutionHook: TimeExecution<(...args) => number>;
```

Defined in: [src/functional-programming.ts:72](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L72)

Time function execution

#### Remarks

- Hook-like higher order function that accepts a function as a parameter
- It returns the return type of the function along with the execution duration

## 3. Typed higher order functions usage

### promisedString

```ts
const promisedString: ReturnType<typeof promisifySyncFn>;
```

Defined in: [src/functional-programming.ts:85](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L85)

Usage: pass a sync function to a hook

#### Remarks

- Use code narrowing in the param function to match wrapper declared type

***

### promisedPromise

```ts
const promisedPromise: ReturnType<typeof promisifyAsyncFn>;
```

Defined in: [src/functional-programming.ts:97](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L97)

Usage: pass an async function to a hook

#### Remarks

- Use code narrowing in the param function to match wrapper declared type

***

### timedCountAllChars

```ts
const timedCountAllChars: ReturnType<typeof timeExecutionHook>;
```

Defined in: [src/functional-programming.ts:111](https://github.com/mulekick/typescript-launchpad/blob/c0b6d4936626de1a5b2131409fb7a742a1fc6661/src/functional-programming.ts#L111)

Usage: pass an async function to a hook

#### Remarks

- Use code narrowing in the param function to match wrapper declared type
