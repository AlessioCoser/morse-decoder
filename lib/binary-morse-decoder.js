class BinaryMorse {
  decode (code) {
    if (code === '1') {
      return '.'
    }

    return '-'
  }
}

exports.BinaryMorse = BinaryMorse
