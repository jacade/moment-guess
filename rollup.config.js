import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import json from '@rollup/plugin-json';
import typescript from 'rollup-plugin-typescript2';


export default [{
	input: './src/index.ts',
	output: [
		{
			file: "dist/bundle.js",
			format: 'cjs',
			name: 'MomentGuess',
			sourcemap: true,
		},
		{
			file: "dist/bundle.esm.js",
			format: 'es',
			name: 'MomentGuess',
			sourcemap: true,
		}
	],
	plugins: [
		resolve(),
		typescript({ tsconfig: 'tsconfig.json' }),
	],
},{
	input: './src/index.ts',
	output: [
		{
			file: "bin/bundle.cmd.js",
			format: 'cjs',
			name: 'MomentGuess',
			banner: '#!/usr/bin/env node',
		},
	],
	plugins: [
		resolve(),
		commonjs(),
		json(),
		typescript({ tsconfig: 'tsconfig.json' }),
	],
}];
