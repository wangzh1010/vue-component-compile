import commonjs from '@rollup/plugin-commonjs';
import resolve from '@rollup/plugin-node-resolve';
import babel from '@rollup/plugin-babel';
import vue from 'rollup-plugin-vue';
import css from 'rollup-plugin-css-only';

export default {
    input: 'src/index.js',
    output: {
        format: 'umd',
        name: 'Button',
        file: 'dist/button.js',
        globals: { vue: 'Vue' },
    },
    external: ['vue'],
    plugins: [
        resolve(),
        commonjs(),
        css(),
        // vue({ compileTemplate: true, css: false, normalizer: '~vue-runtime-helpers/dist/normalize-component.js' }),
        // vue({ isWebComponent: true, template: { isProduction: true }, css: false, normalizer: '~vue-runtime-helpers/dist/normalize-component.js' }),
        vue({ css: false, normalizer: '~vue-runtime-helpers/dist/normalize-component.js' }),
        // babel({ babelHelpers: 'bundled', exclude: '**/node_modules/**', extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'] }),
        babel({ babelHelpers: 'runtime', exclude: '**/node_modules/**', extensions: ['.js', '.jsx', '.es6', '.es', '.mjs', '.vue'] }),
    ]
}
