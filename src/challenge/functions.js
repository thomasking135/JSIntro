// ------------ FUNCTIONS -----------
// Define a function `hello` that returns 'Hello world!'.
function hello() {
  return 'Hello world!'
}

// Define two functions.
//The first function `sayHi` should return 'Hello!' and the second function `sayBye` should return 'Goodbye!'.
function sayHi() {
  return 'Hello!'
}

function sayBye() {
  return 'Goodbye!'
}

// Define a function `greet` that returns 'Hey there!'
// Then declare a variable `salutation` and call the function `greet`, set the result of the function to the variable. 
function greet() {
  return 'Hey there!'
}
 const salutation = greet()

//What value does `helloResult` have?
function hello() {
  return 'Hi!'
}

let helloResult = hello()
// Un comment and assign your answer to the variable `helloResultIs`.
const helloResultIs = 'Hi!'


// ---------- FUNCTIONS WITH PARAMETERS ---------
// Write a function `shout` that also returns the passed parameter.
// Calling shout('Echo') should return 'Echo' and shout('Hello') should return 'Hello'
function shout (word) {
  return word
}

// Which value does `replyResult` have after execution of the following code?
function reply (phrase) {
  return phrase
}

let replyResult = reply('Good morning')
// Un comment and assign your answer to the variable `ReplyResultIs`.
const ReplyResultIs = 'Hi!'

// Write a function 'helloFriend` to greet a person by name, using a parameter.
// Calling helloFriend('Emily') should return 'Hello Emily!'
function helloFriend (name) {
  return 'Hello ' + name + '!'
}


// Which value does `goodMorningResult` have after execution of the following code?
function goodMorning (name) {
  return 'Good morning ' + name + '!'
}

let goodMorningResult = goodMorning('Jacky')
// Un comment and assign your answer to the variable `goodMorningResultIs`.
const goodMorningResultIs = 'Good morning Jacky!'

// Which value does `hiResult` have after execution of the following code?
function hi(name) {
  return 'Hi ' + name + '!'
}

let hi1 = hi('Andy')
let hi2 = hi('Hamish')

let hiResult = hi1 + ' ' + hi2
// Un comment and assign your answer to the variable `hiResultIs`.
const hiResultIs = 'Hi Andy! Hi Hamish!'

// Write a function `alert` that takes a string and returns this string duplicated. In addition, the return should be logged.
function alert(str) {
  const alerting = str + str
  console.log(alerting)
  return alerting
}


// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp. 

// Don't change any code below this comment!
module.exports = { 
  hello,
  sayHi,
  sayBye,
  greet,
  salutation,
  helloResultIs,
  shout, 
  ReplyResultIs,
  helloFriend,
  goodMorningResultIs,
  hiResultIs,
  alert
 }
