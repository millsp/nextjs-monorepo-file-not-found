const path = require('path')
const fs = require('fs')

const filePath = path.join(__dirname, 'file.txt')

function getFileContents() {
  return fs.readFileSync(filePath, 'utf8')
}

module.exports = { getFileContents }
