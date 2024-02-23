import fs from 'node:fs'
import { fileURLToPath } from "node:url"
import path from 'node:path'

export const __filename = fileURLToPath(import.meta.url)
export const __dirname = path.dirname(__filename)

const resolve = (p) => {
  return path.resolve(__dirname, p)
}
console.log(__dirname)

const pkgInfo = fs.readFileSync(resolve('../package.json'), 'utf-8')
console.log(pkgInfo)