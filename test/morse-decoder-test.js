const { equal } = require('assert')
const { Morse, decodeMorse } = require('../morse-decoder')
let morse = new Morse()

test('can translate a letter from morse to Text', function () {
  equal(morse.decode('.-'), 'A')
  equal(morse.decode('--.-'), 'Q')
})

test('can translate more letters using char separator', function () {
  equal(morse.decode('.- --.-'), 'AQ')
  equal(morse.decode('.- --.- .-'), 'AQA')
})

test('can translate more words using triple char separator', function () {
  equal(decodeMorse('.- --.-   .- --.-'), 'AQ AQ')
})

test('spaces after and before morse code are trimmed', function () {
  equal(decodeMorse('   .- --.-   .- --.- '), 'AQ AQ')
})

test('Example from description', function () {
  equal(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
})
