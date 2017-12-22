const MORSE_CODES = require('./lib/morse-codes')

function decodeMorse (morseCode) {
  let chars = morseCode.split(' ')

  return chars.reduce((text, char) => {
    text += MORSE_CODES[char]
    return text
  }, '')
}

module.exports = { decodeMorse }
