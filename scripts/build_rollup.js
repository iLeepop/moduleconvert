import fs from 'node:fs'
import { execa } from 'execa'


// ['A', 'react']
const pkgs = fs.readdirSync('cjs').filter(p => {
  return fs.statSync(`cjs/${p}`).isDirectory()
})

const build = async (pkg) => {
  await execa('rollup', ['-c', '--environment', `TARGET:${pkg}`], { stdio: 'inherit' })
}

const runParallel = (targets, buildFn) => {
  const res = []
  for (const target of targets) {
    console.log(`building ${target}...`)
    res.push(buildFn(target))
  }
  return Promise.all(res)
}

console.log(pkgs)
runParallel(pkgs, build)