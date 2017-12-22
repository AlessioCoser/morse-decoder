const MORSE_CODES = require('./lib/morse-codes')
const CHAR_SEPARATOR = ' '

function decodeMorse (morseCode) {
  let chars = morseCode.split(CHAR_SEPARATOR)

  return decodeChars(chars)
}

function decodeChars (chars) {
  return chars.reduce((text, char) => text + MORSE_CODES[char], String.prototype)
}

module.exports = { decodeMorse }
