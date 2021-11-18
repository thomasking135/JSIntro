const { buildFunctionResult } = require('../')
function resultsForConditionals ({
  isMatch,
  isAMatch,
  greetings,
  chooseGreetingLanguage,
  isSignedIn
}) {
  return [
    isMatchResult(isMatch),
    isAMatchResult(isAMatch),
    greetingsResult(greetings),
    chooseGreetingLanguageResults(chooseGreetingLanguage),
    isSignedInResult(isSignedIn)
  ]
}

function isMatchResult (fn) {
  let result = buildFunctionResult(fn, [1, 2], undefined, 'Should return undefined when inputs are not equal')
  if (result.correct) {
    result = buildFunctionResult(fn, [2, 2], 'Match')
  }
  if (result.correct) {
    result = buildFunctionResult(fn, [1, '1'], undefined, "Don't forget to use strict equality")
  }
  return result
}

function isAMatchResult (fn) {
  let result = buildFunctionResult(fn, [1, 2], 'Not a Match', 'Should return "Not a Match" when inputs are not equal')
  if (result.correct) {
    result = buildFunctionResult(fn, [2, 2], 'Match')
  }
  if (result.correct) {
    result = buildFunctionResult(fn, [1, '1'], 'Not a Match', "Don't forget to use strict equality")
  }
  return result
}

function greetingsResult (fn) {
  let result = buildFunctionResult(fn, ['Te Reo'], 'Kia ora', "Expected 'Kia ora' when input is 'Te Reo'")
  if (result.correct) {
    result = buildFunctionResult(fn, ['English'], 'Hello', "Expected 'Hello', when input is 'English'")
  }
  if (result.correct) {
    if (result.correct) {
      result = buildFunctionResult(fn, [], '👋', "Expected '👋', when input is not 'Te Reo' or 'English'")
    }
  }
  return result
}

function chooseGreetingLanguageResults (fn) {
  if (!fn) {
    return {
      correct: false,
      tip: 'chooseGreetingLanguage not defined'
    }
  }
  if (fn.toString().match(/if/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'Function must not use a if statement'
    }
  }
  if (!fn.toString().match(/switch/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'Function must use a switch statement'
    }
  }

  const answers = {
    'Te Reo': 'Kia ora',
    English: 'Hello',
    Spanish: 'Hola',
    French: 'Bonjour',
    Dutch: 'Hallo',
    Mandarin: 'Nǐ hǎo',
    Samoan: 'Talofa',
    Tagalog: 'Kamusta',
    whatever: '👋'
  }

  for (const language in answers) {
    const answer = answers[language]
    const result = buildFunctionResult(fn, [language], answer, `an input of ${language} should return ${answer}`)
    if (!result.correct) return result
  }
  return {
    correct: true
  }
}

function isSignedInResult (fn) {
  if (!fn) {
    return {
      correct: false,
      tip: 'isSignedIn is not a function'
    }
  }
  if (fn.toString().match(/if/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'isSignedIn should not use if statement'
    }
  }
  if (!fn.toString().match(/\?.*:/)) {
    return {
      correct: false,
      actual: fn.toString(),
      tip: 'must use ternary operator'
    }
  }
  let result = buildFunctionResult(fn, [true], 'Log out')
  if (!result.correct) return result
  result = buildFunctionResult(fn, [false], 'Sign in')
  return result
}

module.exports = resultsForConditionals
