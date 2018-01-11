class BinaryMorse {
  decode (code) {
    return this._toBitsArray(code)
      .map((bit) => this._toMorseSymbol(bit)).join('')
  }

  _toBitsArray (code) {
    return code
      .replace(/01/g, '0|1')
      .replace(/10/g, '1|0')
      .split('|')
  }

  _toMorseSymbol (bit) {
    if (this._isADash(bit)) {
      return '-'
    }

    if (this._isADot(bit)) {
      return '.'
    }

    if (this._isAWordSpace(bit)) {
      return '   '
    }

    if (this._isAPauseBetweenChars(bit)) {
      return ' '
    }

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
