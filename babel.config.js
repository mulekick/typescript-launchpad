// global babel options
export default {
    sourceType: `module`,
    sourceMaps: false,
    presets: [
        [ `@babel/preset-typescript`, {
            isTSX: false,
            allExtensions: true,
            disallowAmbiguousJSXLike: true,
            onlyRemoveTypeImports: true
        } ],
        [ `@babel/preset-env`, {
            useBuiltIns: `usage`,
            corejs: `3.40.0`
        } ]
    ],
    plugins: [ `babel-plugin-transform-import-meta` ]
};