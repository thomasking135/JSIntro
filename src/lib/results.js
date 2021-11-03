const { buildFunctionResult } = require("./index.js");

function resultsForVariables({ welcome, name, value }) {
  return [
    {
      correct: welcome === "Hello world",
      response: welcome,
      tip: welcome !== undefined ? "tip goes here" : "",
    },
    {
      correct: typeof name === "string" && name != "Old Name",
      response: name,
      tip: name !== "Old Name" ? "tip goes here" : "",
    },
    {
      correct: value === "Hardy",
      response: value,
      tip: value !== undefined ? "Nearly, try reading through it again" : "",
    },
  ];
}

function resultsForFunctions({
  hello,
  sayHi,
  sayBye,
  greet,
  salutaiton,
  helloResultIs,
  shout,
  ReplyResultIs,
  helloFriend,
  goodMorningResultIs,
  hiResultIs,
}) {
  return [buildFunctionResult(hello, [], "Hello world!")];
}

module.exports = {
  resultsForVariables,
  resultsForFunctions,
};
