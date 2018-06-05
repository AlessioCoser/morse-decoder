const { equal } = require('assert')
const { BinaryMorse } = require('../lib/binary-morse-decoder')
const { Morse } = require('../lib/morse-decoder')
let binaryMorse = new BinaryMorse()

describe('BinaryMorse', () => {
  it('can decode 1 to "."', () => {
    equal(binaryMorse.decode('1'), '.')
  })

  it('can decode 111 to "-"', () => {
    equal(binaryMorse.decode('111'), '-')
  })

  it('can decode pause between symbols', () => {
    equal(binaryMorse.decode('10111'), '.-')
  })

  it('can decode pause between chars', () => {
    equal(binaryMorse.decode('10111000111010101'), '.- -...')
  })

  it('can decode space between words', () => {
    equal(binaryMorse.decode('10111000111010101000000010111'), '.- -...   .-')
  })

  it('can decode in different sample rate', () => {
    equal(binaryMorse.decode('1100111111000000111111001100110011000000000000001100111111'), '.- -...   .-')
  })

  it('can decode HEY JUDE from binary', () => {
    let binary = '1100110011001100000011000000111111001100111111001111110000000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
    equal(binaryMorse.decode(binary), '.... . -.--   .--- ..- -.. .')

    let morse = new Morse()
    equal(morse.decode(binaryMorse.decode(binary)), 'HEY JUDE')
  })

  it('can decode REAL morse code', () => {
    let binary = '110011001100110000001100000011111100110011111100111111000000000011001111110011111100111111000000110011001111110000001111110011001100000011'
    equal(binaryMorse.decodeAdvanced(binary), '.... . -.--   .--- ..- -.. .')

    let morse = new Morse()
    equal(morse.decode(binaryMorse.decodeAdvanced(binary)), 'HEY JUDE')
  })
})
