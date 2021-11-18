function resultsForVariables ({ welcome, name, value }) {
  return [
    {
      correct: welcome === 'Hello world',
      response: welcome,
      tip: welcome !== undefined ? 'Make sure you spell it exaclty the same' : ''
    },
    {
      correct: typeof name === 'string' && name !== 'Old Name',
      response: name,
      tip: name !== 'Old Name' ? 'make sure you change the name variable' : ''
    },
    {
      correct: value === 'Wiremu',
      response: value,
      tip: value !== undefined ? '- Nearly, try reading through it again' : ''
    }
  ]
}

module.exports = resultsForVariables
