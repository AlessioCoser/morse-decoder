const MORSE_CODES = require('./lib/morse-codes')
const WORD_SEPARATOR = ' '
const CHAR_SEPARATOR = ''
const MORSE_WORD_SEPARATOR = '   '
const MORSE_CHAR_SEPARATOR = ' '

class Morse {
  decode (code) {
    return this.decodeWord(code)
  }

  decodeWord (morseWord) {
    return this.toMorseChars(morseWord).map(this.decodeChar).join(CHAR_SEPARATOR)
  }

  toMorseChars (string) {
    return string.trim().split(MORSE_CHAR_SEPARATOR)
  }

  decodeChar (morseChar) {
    return MORSE_CODES[morseChar]
  }
}

function decodeMorse (morseCode) {
  return toMorseWords(morseCode).map(decodeWord).join(WORD_SEPARATOR)
}

function decodeWord (morseWord) {
  return toMorseChars(morseWord).map(decodeChar).join(CHAR_SEPARATOR)
}

function decodeChar (morseChar) {
  return MORSE_CODES[morseChar]
}

function toMorseChars (string) {
  return string.trim().split(MORSE_CHAR_SEPARATOR)
}

function toMorseWords (string) {
  return string.trim().split(MORSE_WORD_SEPARATOR)
}

module.exports = { Morse, decodeMorse }
