//  -- for loop --
// Write a function `logNames` that takes an array as a parameter. 
// It should loop for the length of the array and console.log the current position. 
// logNames(['Sally', 'Nikita', 'Arnav', 'Akira']) would console.log each person's name. 4 names in total.
// logNames(['Arnav', 'Akira']) would console.log each person's name. 2 names in total.
function logNames (names) {
  for (let i = 0; i <= names.length; i++) {
    console.log(names[i])
  }
}

//  -- nested loop? --
let a = [[1, 7, 3], [2, 8, 5], [9, 0, 4]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    sum = sum + a[i][j];
  }
}

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in Bootcamp. 

// Don't change any code below this comment!
const toExport = {
  
}
if (typeof logNames !== 'undefined') toExport.logNames = logNames
module.exports = toExport

