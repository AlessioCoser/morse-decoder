const MORSE_CODES = require('./lib/morse-codes')
const WORD_SEPARATOR = '   '
const CHAR_SEPARATOR = ' '

function decodeMorse (morseCode) {
  let words = morseCode.split(WORD_SEPARATOR)

  return decodeWords(words)
}

function decodeWords (words) {
  return words.reduce((text, word) => {
    let chars = word.split(CHAR_SEPARATOR)
    return text + ' ' + decodeChars(chars)
  }, String.prototype).trim()
}

function decodeChars (chars) {
  return chars.reduce((text, char) => text + MORSE_CODES[char], String.prototype)
}

module.exports = { decodeMorse }
