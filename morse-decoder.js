class Morse {
  constructor (codes = require('./lib/morse-codes')) {
    this.CODES = codes
    this.ASCII_WORD_SEPARATOR = ' '
    this.ASCII_CHAR_SEPARATOR = ''
    this.MORSE_WORD_SEPARATOR = '   '
    this.MORSE_CHAR_SEPARATOR = ' '
  }

  decode (code) {
    return this.toMorseWords(code).map(this.decodeWord.bind(this)).join(this.ASCII_WORD_SEPARATOR)
  }

  decodeWord (morseWord) {
    return this.toMorseChars(morseWord).map(this.decodeChar.bind(this)).join(this.ASCII_CHAR_SEPARATOR)
  }

  toMorseChars (string) {
    return string.trim().split(this.MORSE_CHAR_SEPARATOR)
  }

  toMorseWords (string) {
    return string.trim().split(this.MORSE_WORD_SEPARATOR)
  }

  decodeChar (morseChar) {
    return this.CODES[morseChar]
  }
}

module.exports = { Morse }
