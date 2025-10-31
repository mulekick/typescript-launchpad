[**my-awesome-typescript-project**](../../README.md)

***

[my-awesome-typescript-project](../../README.md) / src/declaration

# src/declaration

Sample declaration file.

## Remarks

- Declaration files provides a way to declare types or values without providing implementations.
- `*.ts` files are **_implementation_** files that can contain types and executable code.
- `*.d.ts` files are **_declaration_** files that contain only type information.
- Best practice is of course to manage declarations files instead of letting tsc generate them.
- For instance, interface anotherShape is missing from the tsc emitted declaration file (see below).

## Namespaces

| Namespace | Description |
| ------ | ------ |
| [anotherNamespace](namespaces/anotherNamespace.md) | Namespace declaration. |

## Interfaces

### anotherShape

Defined in: [src/declaration.d.ts:16](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/declaration.d.ts#L16)

Interface declaration.

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="aye"></a> `aye` | `string` | [src/declaration.d.ts:17](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/declaration.d.ts#L17) |
| <a id="bee"></a> `bee` | `number` | [src/declaration.d.ts:18](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/declaration.d.ts#L18) |

## Type Aliases

### returnVoid

```ts
type returnVoid = returnVoid;
```

Defined in: [src/declaration.d.ts:25](https://github.com/mulekick/typescript-launchpad/blob/a457d10acc4b923621b76033da1dd80588f8237a/src/declaration.d.ts#L25)

Type declaration.
