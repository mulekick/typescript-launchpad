[**my-awesome-typescript-project**](../../README.md)

***

[my-awesome-typescript-project](../../README.md) / src/ambient

# src/ambient

Ambient module declaration.

## Table of contents

* [Remarks](#remarks)
* [Modules](#modules)
* [Interfaces](#interfaces)

## Remarks

* Declaration and implementation live in independant modules.
* The module name has to be added to tsconfig's `path` directive for correct resolution.
* Typescript describes "ambient declarations" as declarations that don't define implementations.

## Modules

| Module | Description |
| ------ | ------ |
| [ambient](ambient.md) | - |

## Interfaces

### ambientShape

Defined in: [src/ambient.d.ts:14](https://github.com/mulekick/typescript-launchpad/blob/b15506df2d82d49328ac46657117606fe4ed18b8/src/ambient.d.ts#L14)

Declare interface

#### Properties

| Property | Type | Defined in |
| ------ | ------ | ------ |
| <a id="one"></a> `one` | `string` | [src/ambient.d.ts:15](https://github.com/mulekick/typescript-launchpad/blob/b15506df2d82d49328ac46657117606fe4ed18b8/src/ambient.d.ts#L15) |
| <a id="two"></a> `two` | () => `string` | [src/ambient.d.ts:16](https://github.com/mulekick/typescript-launchpad/blob/b15506df2d82d49328ac46657117606fe4ed18b8/src/ambient.d.ts#L16) |
| <a id="three"></a> `three` | `Promise`<`string`> | [src/ambient.d.ts:17](https://github.com/mulekick/typescript-launchpad/blob/b15506df2d82d49328ac46657117606fe4ed18b8/src/ambient.d.ts#L17) |
