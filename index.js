const path = require('path')
const { Morse } = require('./lib/morse-decoder')

if (process.argv.length !== 3) {
  let nodeExec = path.basename(process.argv[0])
  let jsFile = path.basename(process.argv[1])
  console.log(`Usage: ${nodeExec} ${jsFile} "[morse-code-to-convert]"`)
  process.exit(1)
}

let stringToDecode = process.argv[2]
let morse = new Morse()

console.log(morse.decode(stringToDecode))
