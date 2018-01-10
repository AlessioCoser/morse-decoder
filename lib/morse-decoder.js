const ASCII_WORD_SEPARATOR = ' '
const ASCII_CHAR_SEPARATOR = ''
const MORSE_WORD_SEPARATOR = '   '
const MORSE_CHAR_SEPARATOR = ' '

class Morse {
  constructor (codes = require('./morse-codes')) {
    this.CODES = codes
  }

  decode (code) {
    return this._toWords(code).map((word) => this._decodeWord(word)).join(ASCII_WORD_SEPARATOR)
  }

  _decodeWord (word) {
    return this._toChars(word).map((char) => this._decodeChar(char)).join(ASCII_CHAR_SEPARATOR)
  }

  _decodeChar (morseChar) {
    return this.CODES[morseChar]
  }

  _toWords (string) {
    return string.trim().split(MORSE_WORD_SEPARATOR)
  }

  _toChars (string) {
    return string.trim().split(MORSE_CHAR_SEPARATOR)
  }
}

exports.Morse = Morse
