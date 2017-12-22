const { equal } = require('assert')
const { Morse } = require('../morse-decoder')
let morse = new Morse()

test('can translate a letter from morse to Text', () => {
  equal(morse.decode('.-'), 'A')
  equal(morse.decode('--.-'), 'Q')
})

test('can translate more letters using char separator', () => {
  equal(morse.decode('.- --.-'), 'AQ')
  equal(morse.decode('.- --.- .-'), 'AQA')
})

test('can translate more words using triple char separator', () => {
  equal(morse.decode('.- --.-   .- --.-'), 'AQ AQ')
})

test('spaces after and before morse code are trimmed', () => {
  equal(morse.decode('   .- --.-   .- --.- '), 'AQ AQ')
})

test('Example from description', () => {
  equal(morse.decode('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
})
