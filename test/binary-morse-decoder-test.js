const { equal } = require('assert')
const { BinaryMorse } = require('../lib/binary-morse-decoder')
let binaryMorse = new BinaryMorse()

test('BinaryMorse', () => {
  test('can decode 1 to "."', () => {
    equal(binaryMorse.decode('1'), '.')
  })

  test('can decode 111 to "-"', () => {
    equal(binaryMorse.decode('111'), '-')
  })

  test('can decode pause between symbols', () => {
    equal(binaryMorse.decode('10111'), '.-')
  })

  test('can decode pause between chars', () => {
    equal(binaryMorse.decode('10111000111010101'), '.- -...')
  })

  test('can decode space between words', () => {
    equal(binaryMorse.decode('101110001110101010000010111'), '.- -...   .-')
  })
})
