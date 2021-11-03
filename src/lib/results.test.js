const { resultsForVariables, resultsForFunctions } = require("./results");

describe("1. resultsForVariables", () => {
  it("defaults to incorrect", () => {
    let results = resultsForVariables({});
    expect(results[0].correct).toEqual(false);
    expect(results[1].correct).toEqual(false);
    expect(results[2].correct).toEqual(false);
  });
  it("1. defines hello world", () => {
    let result = resultsForVariables({ welcome: "Hello world" })[0];
    expect(result.correct).toBe(true);
  });
  it("2. redefines name", () => {
    let result = resultsForVariables({ name: "Anyone" })[1];
    expect(result.correct).toBe(true);
  });
  it("3. picks correct value", () => {
    let result = resultsForVariables({ value: "Hardy" })[2];
    expect(result.correct).toBe(true);
  });
});

describe("2. resultsForFunctions", () => {
  it("1. writes a function returning hello world", () => {
    const hello = () => "Hello world!";
    let result = resultsForFunctions({ hello })[0];
    expect(result.correct).toBe(true);
  });
});
