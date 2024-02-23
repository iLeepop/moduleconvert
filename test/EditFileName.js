import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const cjs = path.resolve(__dirname, '../cjs')
const fileRead = (file) => {
  const f = fs.readdirSync(file)
  if (f[0].includes('.')) return console.log(f[0]) // 第三方包 只考虑存在一个入口文件
  f.forEach(ft => {
    fileRead(`${file}/${ft}`)
  })
  // fileRead(`${file}/${f}`)
}
// fs.readdirSync(cjs).forEach((file) => fileRead(`${cjs}/${file}`))
// fileRead(cjs)

export const fileFind = (file, pkg) => {
  let r
  const f = fs.readdirSync(file)// 第三方包 只考虑存在一个入口文件
  f.forEach(ft => {
    if (ft === pkg) {
      const fn = fs.readdirSync(`${file}/${ft}`)
      if (fn[0].includes('.')) r = fn[0]
    }
  })
  return r
  // fileRead(`${file}/${f}`)
}

