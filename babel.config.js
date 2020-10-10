const presets = [
    ["@babel/env", {
        "modules": false,
        /*"useBuiltIns": "usage",
        "corejs": 3*/
    }]
];

const plugins = [
    ["@babel/plugin-transform-runtime", { "corejs": 3 }]
];

module.exports = { presets, plugins };
