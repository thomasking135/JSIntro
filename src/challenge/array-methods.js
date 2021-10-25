//  -- push --
// Write a function `addArtwork` that takes an array and an object.
// It should return a new array with the object added into it. 
// Example: addArtwork([{name: 'Floral', value: '$179.99'}], {name: 'Landscape View', value: '$229.99'})
// will return [{name: 'Floral', value: '$179.99'}, {name: 'Landscape View', value: '$229.99'}]

function addArtwork (arr, newItem) {
  arr.push(newItem)
  return arr
}

//  -- pop --
// Write a function `removeLastListing` that takes an array.
// It should return a new array without the last value. 
// Example: removeLastListing([{name: 'Floral', value: '$179.99'}, {name: 'Landscape View', value: '$229.99'}])
// will return [{name: 'Floral', value: '$179.99'}]

function removeLastListing (arr) {
  arr.pop()
  return arr
}

// -- shift -- 
// Write a function `removeFirstListing` that takes an array.
// It should return a new array without the first value. 
// Example: removeFirstListing([{name: 'Floral', value: '$179.99'}, {name: 'Landscape View', value: '$229.99'}])
// will return [{name: 'Landscape View', value: '$229.99'}]

function removeFirstListing (arr) {
  arr.shift()
  return arr
}

// -- includes --
// Write a function 'checkShoppingList' that takes an array and a string.
// It should return true if that string is in the array and false if not. 
// Example: checkShoppingList(['carrot', 'broccoli', 'rice'], 'carrot') returns true.
// Example: checkShoppingList(['carrot', 'broccoli', 'rice'], 'banana') returns false.

function checkShoppingList (arr, str) {
  return arr.includes(str)
}

// -- indexOf --
// Write a function 'checkBandLineup' that takes an array and a string.
// It should return the index of the value that matches the string. 
// Example: checkBandLineup(['Opshop', 'Six60', 'Katchafire', 'Fat Freddys Drop'], 'Six60') returns 1.
// Example: checkBandLineup(['Opshop', 'Six60', 'Katchafire', 'Fat Freddys Drop'], 'Fat Freddys Drop') returns 3.

function checkBandLineup (arr, str) {
  return arr.indexOf(str)
}

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp. 

// Don't change any code below this comment!
module.exports = {
  addArtwork,
  removeLastListing,
  removeFirstListing,
  checkShoppingList,
  checkBandLineup
}