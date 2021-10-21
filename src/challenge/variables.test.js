const { 
  welcome,
  name,
  value
 } = require("./variables");

test("welcome", () => {
  expect(welcome).toEqual("Hello world");
});

test("name", () => {
  expect(typeof name).toEqual("string");
});

test("value", () => {
  expect(value).toEqual("Hardy");
});
