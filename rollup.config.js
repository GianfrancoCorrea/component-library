import { readdirSync, statSync } from 'fs';
import babel from 'rollup-plugin-babel';
import commonjs from '@rollup/plugin-commonjs';
import peerDepsExternal from 'rollup-plugin-peer-deps-external';
import resolve from '@rollup/plugin-node-resolve';
import url from '@rollup/plugin-url';

// get directories that includes index.js files
function getDirectories(path) {
    return readdirSync(path).filter(name => {
        const dirName = `${path}/${name}`;
        return statSync(dirName).isDirectory() && readdirSync(dirName).includes('index.js');
    });
}

// get an object with "name: 'entry-point'" for each module
const getChunks = () => getDirectories('src')
    .reduce((accumulator, directory) => ({ ...accumulator, [directory]: `src/${directory}/index.js` }), {});

const commonPlugins = () => [
    peerDepsExternal(),
    url(),
    babel({ exclude: 'node_modules/**' }),
    resolve(),
    commonjs(),
];

export default [
    {
        input  : { index: 'src/index.js', ...getChunks() },
        output : [
            {
                dir    : 'dist/esm',
                format : 'esm',
            },
            {
                dir    : 'dist/cjs',
                format : 'cjs',
            },
        ],
        plugins: commonPlugins(),
    },
];
