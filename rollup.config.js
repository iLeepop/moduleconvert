import path from 'node:path'
import { fileURLToPath } from 'node:url'
import commonjs from '@rollup/plugin-commonjs'
import { terser } from 'rollup-plugin-minification'
//
import { fileFind } from './test/EditFileName.js'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)
const cjs = path.resolve(__dirname, 'cjs')

const pkg = process.env.TARGET
const pkgN = fileFind(cjs, pkg)
console.log(`build ${pkg} config`)
const resolve = (p, type) => {
  return path.resolve(`${__dirname}/${type}/${pkg}`, p)
}
const buildConfig = (name) => {
  return {
    input: resolve(`${pkgN}`, 'cjs'),
    output: {
      name,
      file: resolve(`${name}.mjs`, 'esm'),
      format: 'esm'
    },
    plugins: [
      commonjs(),
      // terser()
    ]
  }
}

export default buildConfig(pkg)
