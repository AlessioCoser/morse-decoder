class Morse {
  constructor (codes = require('./lib/morse-codes')) {
    this.CODES = codes
    this.ASCII_WORD_SEPARATOR = ' '
    this.ASCII_CHAR_SEPARATOR = ''
    this.MORSE_WORD_SEPARATOR = '   '
    this.MORSE_CHAR_SEPARATOR = ' '
  }

  decode (code) {
    return this.toWords(code).map(this.decodeWord.bind(this)).join(this.ASCII_WORD_SEPARATOR)
  }

  decodeWord (word) {
    return this.toChars(word).map(this.decodeChar.bind(this)).join(this.ASCII_CHAR_SEPARATOR)
  }

  decodeChar (morseChar) {
    return this.CODES[morseChar]
  }

  toWords (string) {
    return string.trim().split(this.MORSE_WORD_SEPARATOR)
  }

  toChars (string) {
    return string.trim().split(this.MORSE_CHAR_SEPARATOR)
  }
}

module.exports = { Morse }
