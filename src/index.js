const variableAnswers = require("./challenge/1-variables");
const functionAnswers = require("./challenge/2-functions");

const { formatResultsSection } = require("./lib");
const { resultsForVariables, resultsForFunctions } = require("./lib/results");

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("results");
  el.innerHTML = buildResults();
});

function buildResults() {
  let variableResults = resultsForVariables(variableAnswers);
  let functionResults = resultsForFunctions(functionAnswers);

  let output = "<h1>Results</h1>";
  output += formatResultsSection("Variables", variableResults);
  output += formatResultsSection("Functions", functionResults);
  return output;
}
