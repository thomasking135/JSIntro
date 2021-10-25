// ----- Logical Operators -----

//  -- && and --
// Write a function `isSame` that takes two booleans as parameters.
// return the first and second parameters.
// Example: isSame(true, true) will return true.
// Example: isSame(true, false) will return false.

function isSame (bool1, bool2) {
  return bool1 && bool2
}

//  -- || or --



//  -- ! not --

// ----- Comparison Operators -----

//   -- = = equal to --

// = = = equal value and equal type
// Write a function `isPassword` that checks two values for strict equality.
// Example: isPassword('passW0rd', 'passW0rd') should return true and isPassword('password', 'passW0rd') should return false.

function isPassword (formPassword, storedPassword) {
  return formPassword === storedPassword
}

//  -- ! = not equal --

//  -- ! = = not equal value or type --

//  -- > greater than --

//  -- < less than --

//  -- > = greater than or equal to --

//  -- < = less than or equal to --

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp. 

// Don't change any code below this comment!
module.exports = {
  isSame,
  isPassword,

}

