const { buildFunctionResult } = require('../')
function resultsForLoops ({
  logNames
}) {
  const oldConsole = console.log
  const logResults = []
  console.log = str => { logResults.push(str) }
  const alertResult = buildFunctionResult(logNames, [['Alice', 'Bob', 'Alan', 'Ada']], undefined)
  console.log = oldConsole
  if (alertResult.correct) {
    alertResult.response = `Console.log called ${logResults.length} times with ${logResults.join(',')}`
    if (logResults.length === 0) {
      alertResult.correct = false
      alertResult.tip = "Don't forget to call console.log for each name inside the loop"
    } else if (logResults.length !== 4) {
      alertResult.correct = false
      alertResult.tip = 'You need to call console.log once for each name in the arguments'
    } else if (logResults.join(',') !== 'Alice,Bob,Alan,Ada') {
      alertResult.correct = false
      alertResult.tip = 'You need to call console.log once for each name in the arguments'
    }
  }
  return [
    alertResult
  ]
}

module.exports = resultsForLoops
