const { equal } = require('assert')
const { decodeMorse } = require('../morse-decoder')

test('Example from description', function () {
  equal(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
})

test('Your own tests', function () {
  // tests here
})
