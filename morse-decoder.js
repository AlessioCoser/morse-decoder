const ASCII_WORD_SEPARATOR = ' '
const ASCII_CHAR_SEPARATOR = ''
const MORSE_WORD_SEPARATOR = '   '
const MORSE_CHAR_SEPARATOR = ' '

class Morse {
  constructor (codes = require('./lib/morse-codes')) {
    this.CODES = codes
  }

  decode (code) {
    return this.toWords(code).map(this.decodeWord.bind(this)).join(ASCII_WORD_SEPARATOR)
  }

  decodeWord (word) {
    return this.toChars(word).map(this.decodeChar.bind(this)).join(ASCII_CHAR_SEPARATOR)
  }

  decodeChar (morseChar) {
    return this.CODES[morseChar]
  }

  toWords (string) {
    return string.trim().split(MORSE_WORD_SEPARATOR)
  }

  toChars (string) {
    return string.trim().split(MORSE_CHAR_SEPARATOR)
  }
}

module.exports = { Morse }
