const MORSE_DASH = '-'
const MORSE_DOT = '.'
const MORSE_WORD_SEPARATOR = '   '
const MORSE_CHAR_SEPARATOR = ' '

class BinaryMorse {
  decode (code) {
    return this._toBitsArray(code).map((bit) => this._toMorseSymbol(bit)).join('')
  }

  _toBitsArray (code) {
    return code.replace(/01/g, '0|1').replace(/10/g, '1|0').split('|')
  }

  _toMorseSymbol (bit) {
    if (this._isADash(bit)) return MORSE_DASH
    if (this._isADot(bit)) return MORSE_DOT
    if (this._isAWordSpace(bit)) return MORSE_WORD_SEPARATOR
    if (this._isAPauseBetweenChars(bit)) return MORSE_CHAR_SEPARATOR
    return ''
  }

  _isADash (bit) {
    return (bit.includes('1')) && (bit.length % 3 === 0)
  }

  _isADot (bit) {
    return bit.includes('1')
  }

  _isAWordSpace (bit) {
    return (bit.includes('0')) && (bit.length % 7 === 0)
  }

  _isAPauseBetweenChars (bit) {
    return (bit.includes('0')) && (bit.length % 3 === 0)
  }
}

exports.BinaryMorse = BinaryMorse
