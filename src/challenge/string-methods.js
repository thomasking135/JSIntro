//  -- .length --
// Write a function `length` that takes a string and returns the number of characters of the string.
// Example: length('Aotearoa') should return 7.
// Example: length('New Zealand') should return 11.

function length (str) {
  return str.length
}

//.toLowerCase & .toUpperCase
// Write a function `toCase` that takes a string and returns that string in lowercase and uppercase with - as delimiter.
// Example: toCase('James') should return 'james-JAMES'.

function toCase (str) {
  const lower = str.toLowerCase()
  const upper = str.toUpperCase()
  return lower + '-' + upper
}

//  -- .charAt --
// Write a function `acronym` that takes three strings and returns the initial letters of theses strings.
// Example: acronym('Enspiral', 'Dev', 'Academy') should return 'EDA'.
// Example: acronym('New', 'Zealand', 'Dollar') should return 'NZD'.

function acronym (str1, str2, str3) {
  const one = str1.charAt(0)
  const two = str2.charAt(0)
  const three = str3.charAt(0)
  return one + two + three
}

//  -- substr --
// Write a function `getMiddleName` that takes a `name` as parameter and returns 'Marie'
// Example: getMiddleName("Jenny Marie Smith") should return 'Marie'.
let name = "Jenny Marie Smith"

function getMiddleName (name) {
  return substring(6, 10) 
}

// -- indexOf --
//Write a function 

function indexOfIgnoreCase(s1, s2) {
  let s1Lower = s1.toLowerCase();
  let s2Lower = s2.toLowerCase();
  return s1Lower.indexOf(s2Lower);
}

//  -- contains --

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp. 

// Don't change any code below this comment!
module.exports = {
  length,
  toCase,
  acronym,
  getMiddleName,
  indexOfIgnoreCase
}