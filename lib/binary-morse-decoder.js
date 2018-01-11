class BinaryMorse {
  decode (code) {
    return code.split('')
    .reduce(this._toBitsArray.bind(this), [])
    .map(this._toMorseSymbol).join('')
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

  _toMorseSymbol (bin) {
    if (bin === '111') {
      return '-'
    }

    if (bin === '1') {
      return '.'
    }

    return ''
  }
}

exports.BinaryMorse = BinaryMorse
