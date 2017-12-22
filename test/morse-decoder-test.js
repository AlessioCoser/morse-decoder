const { equal } = require('assert')
const { decodeMorse } = require('../morse-decoder')

test.skip('Example from description', function () {
  equal(decodeMorse('.... . -.--   .--- ..- -.. .'), 'HEY JUDE')
})
