//  -- if --
// Write a function `isMatch` that checks two values for strict equality. 
// If the two values match, the string 'Match' should be returned.
// Example: isAMatch(1, 1) should return 'Match' and isAMatch(1, 2) won't return.

function isMatch (one, two) {
  if (one === two) {
    return 'Match'
  }
}

//  -- if, else --
// Write a function `isAMatch` that checks two values for strict equality. 
// If the two values match, the string 'Match' should be returned. 
// If they are not a match, you should get 'Not a match'.
// Example: isAMatch(1, 1) should return 'Match' and isAMatch(1, 2) should return 'Not a match'.


function isAMatch (one, two) {
  if (one === two) {
    return 'Match'
  } else {
    return 'Not a match'
  }
}

//  -- if, else if, else --
// Write a function `greetings` that takes a string. 
// If the string strictly equals 'Te Reo' the string 'Kia ora' should be returned. 
// If the string strictly equals 'English' the string 'Hello' should be returned. 
// Otherwise return a '👋'
// Example: greetings('Te Reo') should return 'Kia ora' and greetings('Dutch') should return '👋'.

function greetings (str) {
  if (str === 'Te Reo') {
    return 'Kia ora'
  } else if (str === 'English') {
    return 'Hello'
  } else return '👋'
}

// -- switch statement --
// Write a Function `chooseGreetingLanguage`that takes a string.
// If the string matches a case it should return, otherwise return the default.
// Example: chooseGreetingLanguage('Dutch') returns 'Hallo'
// chooseGreetingLanguage('Te Reo') returns 'Kia ora'
// chooseGreetingLanguage('Tagalog') returns 'Kamusta'
// chooseGreetingLanguage('Mandarin') returns 'Ni hao'
// chooseGreetingLanguage('French') returns 'Bonjour'
// Anything else passed in will return '👋'
// Got to have a lot of options for our switch statement! 

function chooseGreetingLanguage(language) {
  switch(language) {
    case 'Te Reo':
      return 'Kia ora'
    case 'English':
      return 'Hello'
    case 'Spanish':
      return 'Hola'
    case 'French':
      return 'Bonjour'
    case 'Dutch':
      return 'Hallo'
    case 'Mandarin':
      return 'Nǐ hǎo'
    case 'Samoan':
      return 'Talofa'
    case 'Tagalog':
      return 'Kamusta'
      default:
        return '👋'
  }
}

//  -- ternary  --
// Write a function `isSignedIn` that checks if isMember is truthy.
// Example: isSignedIn(true) should return the value 'Log out'.
// Example: isSignedIn(false) should return the value 'Sign in'.

function isSignedIn(isSignedIn) {
  return (isSignedIn ? 'Log out' : 'Sign in')
}

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in Bootcamp. 

// Don't change any code below this comment!
module.exports = { 
  isMatch,
  isAMatch,
  greetings,
  chooseGreetingLanguage,
  isSignedIn
 }
