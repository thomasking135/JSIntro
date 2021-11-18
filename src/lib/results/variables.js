function resultsForVariables ({ welcome, name, value }) {
  return [
    {
      correct: welcome === 'Hello world',
      response: welcome,
      tip: welcome !== undefined ? 'tip goes here' : ''
    },
    {
      correct: typeof name === 'string' && name !== 'Old Name',
      response: name,
      tip: name !== 'Old Name' ? 'tip goes here' : ''
    },
    {
      correct: value === 'Marama',
      response: value,
      tip: value !== undefined ? '- Nearly, try reading through it again' : ''
    }
  ]
}

module.exports = resultsForVariables
