const { equal } = require('assert')
const { Morse } = require('../lib/morse-decoder')
let morse = new Morse()

describe('Morse', () => {
  it('can translate a letter from morse to Text', () => {
    equal(morse.decode('.-'), 'A')
    equal(morse.decode('--.-'), 'Q')
  })

  it('can translate more letters using char separator', () => {
    equal(morse.decode('.- --.-'), 'AQ')
    equal(morse.decode('.- --.- .-'), 'AQA')
  })

  it('can translate more words using triple char separator', () => {
    equal(morse.decode('.- --.-   .- --.-'), 'AQ AQ')
  })

  it('spaces after and before morse code are trimmed', () => {
    equal(morse.decode('   .- --.-   .- --.- '), 'AQ AQ')
  })

  it('Example from description', () => {
    equal(morse.decode('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
  })
})
