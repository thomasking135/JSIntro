// 1. Declare a variable called `welcome`, assign the value 'Hello world'
// 2. Reassign the variable `name` to have the value of your name.   
let name = 'Old Name'

// 3. Which value does `nameOne` have after execution of the following code?
let nameOne = 'Marama'
let nameTwo = 'Wiremu'
let nameThree = nameTwo
nameTwo = nameOne
nameOne = nameThree
// Uncomment the following line and assign your answer to the variable `value`.
//const value =  

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!

let toExport = { name }
if (typeof value !== 'undefined') toExport.value = value
if (typeof welcome !== 'undefined') toExport.welcome = welcome
module.exports = toExport