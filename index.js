const path = require('path')
const { BinaryMorse } = require('./lib/binary-morse-decoder')
const { Morse } = require('./lib/morse-decoder')

if (process.argv.length !== 4) {
  let nodeExec = path.basename(process.argv[0])
  let jsFile = path.basename(process.argv[1])
  console.log(`Usage: ${nodeExec} ${jsFile} morse "[morse-code-to-convert]"`)
  console.log(`       ${nodeExec} ${jsFile} binary "[binary-code-to-convert]"`)
  process.exit(1)
}

let decodingType = process.argv[2]
let stringToDecode = process.argv[3]
let morse = new Morse()

if (decodingType === 'binary') {
  let binaryMorse = new BinaryMorse()
  console.log(morse.decode(binaryMorse.decode(stringToDecode)))
} else {
  console.log(morse.decode(stringToDecode))
}
