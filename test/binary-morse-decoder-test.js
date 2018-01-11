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

  test('can decode in different sample rate', () => {
    equal(binaryMorse.decode('110011111100000011111100110011001100000000001100111111'), '.- -...   .-')
  })

  test('ccc', () => {
    let binary = '110011001100110000001100000011111100110011111100111111000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
    let expectedMorseCode = '.... . -.--   .--- ..- -.. .'

    equal(binaryMorse.decode(binary), expectedMorseCode)
  })
})
