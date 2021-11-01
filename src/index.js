const variableAnswers = require("./challenge/1-variables");

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("results");
  el.innerHTML = buildResults();
});

function buildResults() {
  let output = "<h1>Results</h1>";
  output += buildResultsForVariables(variableAnswers);
  return output;
}

function buildResultsForVariables({ welcome, name, value }) {
  let results = [
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
  let output = `<div class='results'>
    <h2>Variables</h2>
    <ol>
    ${formatResults(results)}
    </ol>
  </div>`;
  return output;
}

function formatResults(results) {
  return results.map(formatResult).join("");
}

function formatResult({ correct, response, tip }) {
  return `<li class="${correct ? "tick" : "cross"}">
    ${response}
    ${correct ? "" : tip}
    </li>`;
}

// show section function
//
// create feedback object for each question
// feedback types
//   variables
//   function
//   multi choice?
