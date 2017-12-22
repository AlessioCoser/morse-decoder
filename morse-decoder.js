const MORSE_CODES = require('./lib/morse-codes')
const WORD_SEPARATOR = ' '
const CHAR_SEPARATOR = ''
const MORSE_WORD_SEPARATOR = '   '
const MORSE_CHAR_SEPARATOR = ' '

function decodeMorse (morseCode) {
  return toMorseWords(morseCode).map((morseWord) => decodeChars(morseWord)).join(WORD_SEPARATOR)
}

function decodeChars (morseWord) {
  return toMorseChars(morseWord).map((morseChar) => morseToAscii(morseChar)).join(CHAR_SEPARATOR)
}

function morseToAscii (morseChar) {
  return MORSE_CODES[morseChar]
}

function toMorseChars (string) {
  return string.trim().split(MORSE_CHAR_SEPARATOR)
}

function toMorseWords (string) {
  return string.trim().split(MORSE_WORD_SEPARATOR)
}

module.exports = { decodeMorse }
