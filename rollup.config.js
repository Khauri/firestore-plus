import commonjs from 'rollup-plugin-commonjs'
import babel from 'rollup-plugin-babel'
// import copier from 'rollup-plugin-copier'
import resolve from 'rollup-plugin-node-resolve'
// import { uglify } from 'rollup-plugin-uglify'

import pkg from './package.json'

const plugins = [
    resolve(),
    commonjs(),
    babel({
        exclude: 'node_modules/**' // only transpile our source code
    }),
]

export default [{
    input : 'src/index.js',
    output : [{
        file : pkg.main,
        format : 'cjs',
        exports : 'named'
    }, {
        file : pkg.module,
        format : 'es',
        exports : 'named'
    }],
    plugins
}, {
    input : 'src/index.js',
    output : [{
        file : pkg.browser,
        format : 'umd',
        name : 'window',
        extend : true,
        exports : 'named'
    }],
    plugins : [...plugins]
}]