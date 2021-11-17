const { buildFunctionResult } = require('../')
function resultsForFunctions({
  hello,
  sayHi,
  sayBye,
  greet,
  helloResultIs,
  shout,
  replyResultIs,
  helloFriend,
  goodMorningResultIs,
  hiResultIs,
  alert
}) {
  return [
    buildFunctionResult(hello, [], 'Hello world!'), 
    buildFunctionResult(sayHi, [], 'Hello!'),
    buildFunctionResult(sayBye, [], 'Goodbye!'),
    buildFunctionResult(greet, [], 'Hey there!'),
    {
      correct: helloResultIs === 'Hi!',
      response: helloResultIs,
      tip: helloResultIs !== undefined ? '- Nearly, try reading through it again' : ''
    },
    buildFunctionResult(shout, ['Echo'], 'Echo'),
    {
      correct: replyResultIs === 'Good morning',
      response: replyResultIs,
      tip: replyResultIs !== undefined ? '- Nearly, try reading through it again' : ''
    },
    buildFunctionResult(helloFriend, ['Emily'], 'Hello Emily!'),
    {
      correct: goodMorningResultIs === 'Good morning Jacky!',
      response: goodMorningResultIs,
      tip: goodMorningResultIs !== undefined ? '- Nearly, try reading through it again' : ''
    },
    {
      correct: hiResultIs === 'Hi Andy! Hi Hamish!',
      response: hiResultIs,
      tip: hiResultIs !== undefined ? ' - Nearly, try reading through it again' : ''
    },
    buildFunctionResult(alert, ['Fire'], 'Fire Fire')
  ]
}

module.exports = resultsForFunctions