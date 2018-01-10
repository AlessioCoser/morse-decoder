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
})
