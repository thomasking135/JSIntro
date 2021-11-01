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
// Example: greetings('Te reo') should return 'Kia ora' and greetings('Dutch') should return '👋'.

function greetings (str) {
  if (str === 'Te Reo') {
    return 'Kia ora'
  } else if (str === 'English') {
    return 'Hello'
  } else return '👋'
}

//  -- turnary  --
// Write a function `isSignedIn` that checks if isMember is truthy.
// Example: isSignedIn(true) should return the value 'Log out'.
// Example: isSignedIn(false) should return the value 'Sign in'.

function isSignedIn(isSignedIn) {
  return (isSignedIn ? 'Log out' : 'Sign in');
}

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp. 

// Don't change any code below this comment!
module.exports = { 
  isMatch,
  isAMatch,
  greetings,
  isSignedIn
 }