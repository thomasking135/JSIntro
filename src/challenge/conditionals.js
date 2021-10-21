//  -- if --
// Write a function `isAMatch` that checks two values for strict equality. 
// If the two values match, the string 'Match' should be returned. 
// If they are not a match, you should get 'Not a match'.
// Example: isAMatch(1, 1) should return 'Match' and isAMatch(1, 2) should return 'Not a match'.

function isAMatch (one, two) {
  if (one === two) {
    return 'Match'
  }
  return 'Not a match'
}

//  -- if, else --

function something (one, two) {
  if (one === two) {
    return 'Match'
  } else {
    return 'Not a match'
  }
}

//  -- if, else if, else --

function something (one, two, three) {
  if (one === two) {
    return 'something'
  } else if ( one === three) {
    return 'something else'
  } else return 'some thing'
}

//  -- turnary  --
// Write a function `getFee` that checks if isMember is truthy.
// Example: getFee(true) should return the member fee '$2.00'
// Example: getFee(false) should return the non member fee'$10.00'.

function getFee(isMember) {
  return (isMember ? '$2.00' : '$10.00');
}