import fs from 'node:fs'
import { fileURLToPath } from 'node:url'
import path from 'node:path'
import * as esbuild from 'esbuild'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const resolve = (p) => {
  return path.resolve(__dirname, p)
}

const pkgInfo = fs.readFileSync(resolve('../package.json'), 'utf-8')
const pkg = JSON.parse(pkgInfo)

const entryPoints = [
  resolve('../index.js'),
]
const entryNames = `[dir]/[name]-[hash]`
let outdir = resolve(`../dist/esm/${pkg.name}`)

/* 
  external: [ 
    react, 
    react-dom, 
    mobx, 
    mobx-react-lite 
  ]
*/
const external = [
  'react',
  'react-dom',
  'mobx',
  'mobx-react-lite'
]

const buildConfig = () => {
  return {
    entryPoints,
    entryNames,
    bundle: true,
    outdir,
    outExtension: {
      '.js': '.mjs',
    },
    platform: 'node',
    /*
      format: 'esm',
    */
    format: 'esm',
    external,
  }
}

await esbuild.build(buildConfig())