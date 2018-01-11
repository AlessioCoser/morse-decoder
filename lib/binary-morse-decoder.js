class BinaryMorse {
  decode (code) {
    return code.split('')
    .reduce(this._toBitsArray.bind(this), [])
    .map(this._toMorseSymbol.bind(this)).join('')
  }

  _toBitsArray (bitsArray, bit) {
    let lastElement = bitsArray.splice(-1, 1)[0] || ''

    if (lastElement.includes(bit)) {
      lastElement = lastElement + bit
      bitsArray.push(lastElement)
    } else {
      bitsArray.push(lastElement)
      bitsArray.push(bit)
    }

    return bitsArray
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
