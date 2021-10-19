const { hello } = require("./variables");

test("hello world", () => {
  expect(hello).toEqual("hello world");
});
