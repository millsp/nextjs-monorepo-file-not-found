const { getFileContents } = require('file-reader')

export default async function handle(req, res) {
  res.json({ data: getFileContents() })
}