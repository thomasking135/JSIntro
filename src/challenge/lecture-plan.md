# Lecture Plan: Intro to Javascript

This is a very basic lecture plan to demonstrate each of the things the students will need to learn to complete the first exercise. Each segment could be their own clip.

## Variables
### Chat about:
- What is a variable?
- Why do we use them?
- Many languages has a way like this to store information

### Demonstrate:
- How to declare a variable
  - Helps to note difference between `let` and `const`
- What can the value of a variable be? (String, Boolean, Integer, Array etc)
- Reassign a variable
- The value of a variable can be have the value of another variable: 
  - Note that if you change `a` it doesn't change `b`, why?

```js
let a = 'Laurel';
let b = 'Hardy';
let c = b;
b = a;
a = c;
```

## Functions
### Chat about:
- What is a function?
- Why do we use them?

### Demonstrate:
- Declaring a simple function without parameters
- Calling the function
- Declaring a function that uses parameters
- Call a function that needs parameters
- Advanced: A function can call another function
- Show how to `console.log()` inside a function before returning
- Show returning from a function with concatenation like:

```js
function hi(name) {
  return 'Hi ' + name + '!'
}
```

## Objects 
### Chat about:
- What is an object?
- Why do we use them?

### Demonstrate:
- Define an object with a key value pair
- What can the values of an objects key: value pair be? (String, object, array etc) 
- Access an item in the object
- Reassign the value in an object

## Arrays
### Chat about:
- What is an array?
- Why do we use them?
- How are different to objects (more like a list)

### Demonstrate:
- Define an array
- Add items into a populated array
- Add items into empty array
- What can the values of an array be? (String, object, array etc) 
- Access an item in the array
- - Reassign the value in an array
- Show array.length


## Loops
### Chat about:
- What is a loop?
- Why do we use them?

### Demonstrate:
- Creating a loop
- Accessing current position
- Nested loops

## Operators
### Chat about:
- What are operators?
- Why do we use them?

### Demonstrate:

Logical operators:
- `+` plus
- `-` minus
- `*` multiply
- `/` divide
- `&&` and
- `||` or
- `!` not
- `++` increment
- `--` decrement

Comparison Operators:
- `==` equals
- `===` strict equals
- `!=` not equal
- `!==` not equal value or type
- `>` greater than
- `<` less than
- `>=` greater than or equal to
- `<=` less than or equal to


## Conditionals
### Chat about:
- What are conditionals?
- Why do we use them?

### Demonstrate:
- Simple if:
```js
function isAMatch (one, two) {
  if (one === two) {
    return 'Match'
  }
}
```

- if/else
- if/else if/else
- Advanced: Turnary (`? :`)

## Note
* All of these examples will match examples we will get stdents to define/call or figure out the returned value of. 