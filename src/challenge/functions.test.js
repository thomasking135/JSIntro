const { 
  hello,
  sayHi,
  sayBye,
  greet,
  salutation
 } = require("./functions");

test("hello", () => {
  expect(hello).toEqual("Hello world");
});

test("sayHi", () => {
  expect(sayHi).toEqual("Hello!");
});

test("sayBye", () => {
  expect(sayBye).toEqual("Goodbye!");
});

test("greet", () => {
  expect(greet).toEqual("Hey there!");
});

test("salutation", () => {
  expect(salutation).toEqual("Hey there!");
});

