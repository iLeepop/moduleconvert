import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import { execa } from 'execa'
//
import { formDataAppendSingle, buildBlob, uploadZip, uploadMeta, zip, rmZip } from './util/upload.js'

const __filename = fileURLToPath(import.meta.url)
const __dirname = `${path.dirname(__filename)}`
const version = process.env.VERSION

// ['A', 'react'] cjs -> esm
const pkgs = fs.readdirSync('cjs').filter(p => {
  return fs.statSync(`cjs/${p}`).isDirectory()
})

function pickFile(p, arr) {
  fs.readdirSync(p).forEach(f => { //resolve(p, 'cjs')
    if (fs.statSync(`${p}/${f}`).isDirectory()) {
      pickFile(`${p}/${f}`, arr)
    } else {
      arr.push(`${p}:${f}`)
    }
  })
}

function mapFile(pkgs) {
  const ps = new Array()
  pkgs.forEach(pkg => {
    pickFile(`cjs/${pkg}`, ps)
  });
  return ps
}

async function build(pkg, version) {
  await execa('rollup', ['-c', '--environment', `TARGET:${pkg}`, '--environment', `VERSION:${version}`], { stdio: 'inherit' })
}

async function runParallel(targets, buildFn, version) {
  const res = []
  for (const target of targets) {
    res.push(buildFn(target, version))
  }
  return Promise.all(res)
}

// sync rollup build logical
function buildInfo(pkgMap) {
  const pkgsInfo = {}
  pkgsInfo['packages'] = {}
  pkgMap.forEach(p => {
    const filepath = p.split(':')[0].replace('cjs', version)
    const filename = p.split(':')[1].split('.')[0] + '.mjs'
    const [pkgN, pkgV] = filepath.split('/')[1].split('@')
    const fullpath = `${filepath}/${filename}`
    const entry = filename.split('.')[0]
    if (!pkgsInfo['packages'][pkgN]) pkgsInfo['packages'][pkgN] = {
      'versions': {}
    }
    if (!pkgsInfo['packages'][pkgN]['versions'][pkgV]) pkgsInfo['packages'][pkgN]['versions'][pkgV] = {
      'version': pkgV,
      'entrys': {}
    }
    pkgsInfo['packages'][pkgN]['versions'][pkgV]['entrys'][entry] = fullpath
  })
  return pkgsInfo
}

// console.log(version)
console.log(pkgs)
console.dir(JSON.stringify(buildInfo(mapFile(pkgs))))
uploadMeta(JSON.stringify(buildInfo(mapFile(pkgs)))).then(res => {
  console.log(res.statusText)
})


// runParallel(mapFile(pkgs), build, version).then(() => {
//   zip(version, `esm/${version}/`).then(() => {
//     const formData = new FormData()
//     formDataAppendSingle(formData, buildBlob(`${version}.zip`), `${version}.zip`)
//     uploadZip(formData, version).then(() => {
//       rmZip(`${version}.zip`)
//     })
//   })
// })
