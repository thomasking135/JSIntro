function buildFunctionResult (fn, inputs, expected, noMatchTip = '') {
  if (!fn) {
    return {
      correct: false,
      response: undefined,
      tip: 'function was not defined'
    }
  } else if (typeof fn !== 'function') {
    return {
      correct: false,
      response: fn,
      tip: 'is not a function'
    }
  }

  let actual
  let tip
  try {
    actual = fn(...inputs)
  } catch (e) {
    tip = e
  }
  if (actual !== expected) {
    tip = noMatchTip || `Expected: ${expected}`
  }
  return {
    correct: actual === expected,
    response: actual,
    tip
  }
}

function buildMultipleFunctionResult (fn, calls) {
  let result
  for (const params of calls) {
    const [inputs, returnVal] = params
    result = buildFunctionResult(fn, inputs, returnVal)
    if (!result.correct) return result
  }
  return result
}

function formatResultsSection (title, results) {
  const output = `<div class='results'>
    <h2>${title}</h2>
    <ol>
    ${formatResults(results)}
    </ol>
  </div>`
  return output
}

function formatResults (results) {
  return results.map(formatResult).join('')
}

function formatResult ({ correct, response, tip }) {
  if (!tip) tip = ''
  return `<li class="${correct ? 'tick' : 'cross'}">
    ${response}
    ${correct ? '' : tip}
    </li>`
}
module.exports = {
  buildFunctionResult,
  buildMultipleFunctionResult,
  formatResultsSection
}
