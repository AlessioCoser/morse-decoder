const { equal } = require('assert')
const { Morse } = require('../lib/morse-decoder')
let morse = new Morse()

test('Example from description', function () {
  equal(morse.decode('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
})

test('Your own tests', function () {
  // tests here
})
