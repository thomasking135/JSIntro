const variableAnswers = require("./challenge/1-variables");
const functionAnswers = require("./challenge/2-functions");
const objectAnswers = require("./challenge/3-objects");
const arrayAnswers = require("./challenge/4-arrays");
const loopAnswers = require("./challenge/5-loops");

const { formatResultsSection } = require("./lib");
const { 
  resultsForVariables,
   resultsForFunctions, 
   resultsForObjects,
   resultsForArrays,
   resultsForLoops,
  } = require("./lib/results");

document.addEventListener("DOMContentLoaded", () => {
  const el = document.getElementById("results");
  el.innerHTML = buildResults();
});

function buildResults() {
  let variableResults = resultsForVariables(variableAnswers);
  let functionResults = resultsForFunctions(functionAnswers);
  let objectResults = resultsForObjects(objectAnswers);
  let arrayResults = resultsForArrays(arrayAnswers);
  let loopResults = resultsForLoops(loopAnswers);

  let output = "<h1>Results</h1>";
  output += formatResultsSection("Variables", variableResults);
  output += formatResultsSection("Functions", functionResults);
  output += formatResultsSection("Objects", objectResults);
  output += formatResultsSection("Arrays", arrayResults);
  output += formatResultsSection("Loops", loopResults);
  return output;
}
