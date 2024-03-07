import path from 'node:path'
import { fileURLToPath } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-minification'
//
import { fileFind } from './scripts/util/EditFileName.js'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)
const cjs = path.resolve(__dirname, 'cjs')

const fullpkg = process.env.TARGET // 'cjs/react@18.2.0:react.production.min.js'
const version = process.env.VERSION
const pkg = fullpkg.split(':')[1]
const dir = fullpkg.split(':')[0].replace(/cjs/, '')
const pkgn = pkg.split('.')[0]
const pkgN = fileFind(cjs, pkg)
console.log(`build ${pkg} config`)
const resolve = (p, type) => {
  return path.resolve(`${__dirname}/${type}/${dir}`, p)
}
const buildConfig = (name) => {
  return {
    input: resolve(`${name}`, 'cjs'), // pkgN is fullname
    output: {
      name,
      file: resolve(`${pkgn}.mjs`, `esm/${version}`),
      format: 'esm'
    },
    plugins: [
      commonjs(),
      // terser()
    ]
  }
}

export default buildConfig(pkg)
