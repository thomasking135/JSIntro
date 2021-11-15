const { buildFunctionResult } = require('./index.js')

function resultsForVariables({ welcome, name, value }) {
  return [
    {
      correct: welcome === 'Hello world',
      response: welcome,
      tip: welcome !== undefined ? 'tip goes here' : ''
    },
    {
      correct: typeof name === 'string' && name != 'Old Name',
      response: name,
      tip: name !== 'Old Name' ? 'tip goes here' : ''
    },
    {
      correct: value === 'Marama',
      response: value,
      tip: value !== undefined ? '- Nearly, try reading through it again' : ''
    },
  ]
}

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

function resultsForObjects({
contact,
receipt,
customer,
person
}) {
  return [
    {
      correct: contact.name === 'Leon Kim' && contact.address === '123 Main St' && contact.phone === '021 555 555',
      response: JSON.stringify(contact, null, 2),
      tip: contact.name !== undefined ? ' <br/><br/> Nearly, check that all the values exactly matches the instructions (the test is case and whitespace sensitive!) <br/>' : ''
    },
    {
      correct: customer === 'Marta' && customer === receipt.name,
      response: customer,
      tip: customer !== undefined ? ' <br/><br/> Nearly, try using dot notation to access the receipt object\'s name property' : ''
    },
    {
      correct: person.name !== 'Navita',
      response: JSON.stringify(person, null, 2),
      tip: customer !== undefined ? ' <br/><br/> Nearly, try using dot notation to access the receipt object\'s name property and then assign a new value!' : ''
    }
  ]
}

function resultsForArrays({
  shoppingList,
  treeResult,
  favouriteBrowsers,
  names,
  arrLength
}) {
  return [
    {
      correct: shoppingList.includes('Mangosteen') && shoppingList.includes('Kiwifruit') && shoppingList.includes('Longan')  && shoppingList.length === 3,
      response:  JSON.stringify(shoppingList, null, 2),
      tip: shoppingList !== undefined ? ' <br/><br/> Nearly, check that all the values are included and exactly match the instructions (the test is case and whitespace sensitive!) <br/>' : ''
    },
    {
      correct: treeResult === 'Kahikatea',
      response:  JSON.stringify(treeResult, null, 2),
      tip: treeResult !== undefined ? ' <br/><br/> Nearly, make sure you are accessing the first element with bracket notation!<br/>' : ''
    },
    {
      correct: favouriteBrowsers[0] === 'Brave' && favouriteBrowsers[0] !== 'Chrome',
      response:  favouriteBrowsers[0],
      tip: favouriteBrowsers !== undefined ? ' <br/><br/> Nearly, make sure you are accessing the first element with bracket notation and matching the new value (as stated in the instructions) exactly!<br/>' : ''
    },
    {
      correct: arrLength === names.length && arrLength === 3,
      response:  arrLength,
      tip: arrLength !== undefined ? ' <br/><br/> Nearly, use the name array and find out the length of that array. It should return a number.<br/>' : ''
    }
  ]
}


function resultsForLoops({
  logNames
}) {
  return [
    
  ]
}


module.exports = {
  resultsForVariables,
  resultsForFunctions,
  resultsForObjects,
  resultsForArrays,
  resultsForLoops
}
