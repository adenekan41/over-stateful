import babel from 'rollup-plugin-babel';
import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import multiInput from 'rollup-plugin-multi-input';
import { terser } from 'rollup-plugin-terser';

export default {
  input: ['src/**/*.js', 'src/core/**/*.js'],
  output: [
    {
      dir: 'bundle-es',
      format: 'es',
      name: 'bundle',
      plugins: [terser()],
    },
    {
      dir: 'bundle-cjs',
      format: 'cjs',
      exports: 'named',
      name: 'bundle',
      plugins: [
        terser({
          include: ['core/**/*.js'],
          exclude: ['index.js'],
        }),
      ],
    },
    {
      name: 'bundle',
      dir: 'bundle-umd',
      format: 'esm',
      exports: 'named',
      plugins: [
        terser({
          include: ['core/**/*.js'],
          exclude: ['index.js'],
        }),
      ],
      globals: {
        react: 'React',
      },
    },
  ],
  plugins: [
    multiInput(),
    babel({
      exclude: 'node_modules/**',
    }),
    resolve({
      jsnext: true,
      main: true,
      browser: true,
    }),
    commonjs({
      include: 'node_modules/**',
      // left-hand side can be an absolute path, a path
      // relative to the current directory, or the name
      // of a module in node_modules
      namedExports: {
        'node_modules/react/index.js': [
          'createElement',
          'createContext',
          'useContext',
          'useReducer',
        ],
      },
    }),
  ],
};
