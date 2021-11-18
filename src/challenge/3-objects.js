// Define an object `contact`. This object should contain:
// The property `name` and the value 'Leon Kim'.
// The property `address` and the value '123 Main St'.
// The property `phone` and the value '021 555 555'.

// From the object `receipt` access the name property and set that as the value of 'customer'.
// Make sure you access the objects property, do not just type the string name.
const receipt = {
  price: 89.99,
  store: 'Ariels Diner',
  name: 'Marta'
}

//const customer = 

// Access the `name` property in the `person` object and reassign the value to be a different name (Perhaps your name?).
const person = {
  name: 'Navita',
  age: '28',
  eyeColor: 'brown'
}

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp.

// Don't change any code below this comment!
const toExport = {
  person,
  receipt
}
if (typeof contact !== 'undefined') toExport.contact = contact
if (typeof customer !== 'undefined') toExport.customer = customer
module.exports = toExport
