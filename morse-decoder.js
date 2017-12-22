const MORSE_CODES = require('./lib/morse-codes')

function decodeMorse (morseCode) {
  return MORSE_CODES[morseCode]
}

module.exports = { decodeMorse }
