import path from 'path'
import fs from 'fs'

const filePath = path.join(__dirname, 'file.txt')

function getFileContents() {
  return fs.readFileSync(filePath, 'utf8')
}

export { getFileContents }
