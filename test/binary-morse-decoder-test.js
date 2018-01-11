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
    equal(binaryMorse.decode('10111000111010101000000010111'), '.- -...   .-')
  })

  test('can decode in different sample rate', () => {
    equal(binaryMorse.decode('1100111111000000111111001100110011000000000000001100111111'), '.- -...   .-')
  })

  test('cand decode HEY JUDE from binary', () => {
    let binary = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
    let expectedMorseCode = '.... . -.--   .--- ..- -.. .'

    equal(binaryMorse.decode(binary), expectedMorseCode)
  })
})
