// Define an object `contact`. This object should contain:
// The property `name` and the value 'Leo Smith'.
// The property `address` and the value '123 Main St'.
// The property `phone` and the value '021 555 555'.

const contact = {
  name: 'Leon Kim',
  address: '123 Main St',
  phone: '021 555 555'
}

// From the object `receipt` access the name property and set that as the value of 'customer'.
const receipt = {
  price: 89.99,
  store: 'Ariels Diner',
  name: 'Marta'
}

const customer = receipt.name

// Access the `name` property in the `person` object and reassign the value of property `name` to be 'Navita'.
const person = {
  name: 'Arnav',
  age: '28',
  eyeColor: 'brown'
}

person.name = 'Navita'

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp. 

// Don't change any code below this comment!
module.exports = {
  contact,
  customer,
  person
}
