// -- return arr -- 
// Define an array `shoppingList`. This array should contain:
// Three strings that are fruit. 'Kiwifruit', 'Mangosteen', 'Longan' .

//  -- get arr elements --
// Assign the variable `treeResult` with the code that accesses the first value from the array `trees`.
// Example: The code should work even if you change the values in the array. It should always retrieve the first element.
const trees = ['Kahikatea', 'Cherry Blossom', 'Paogo']
// Write your code below this comment

//  -- set arr elements --
// Write some code that will reassign the value of the first element in the array `favouriteBrowsers` with the string 'Brave'.
const favouriteBrowsers = ['Chrome', 'Firefox']
// Write your code below this comment


// -- arr length --
// Write some code that gets the length of the array `names` and set that code to be the value of  the variable `arrLength`
const names = ['Yuko', 'Amanda', 'Kahu']
// Write your code below this comment

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  favouriteBrowsers,
  names
}
if (typeof shoppingList !== 'undefined') toExport.shoppingList = shoppingList
if (typeof treeResult !== 'undefined') toExport.treeResult = treeResult
if (typeof arrLength !== 'undefined') toExport.arrLength = arrLength
module.exports = toExport
