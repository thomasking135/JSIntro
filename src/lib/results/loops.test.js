const resultsForLoops = require('./loops')
describe('5. resultsForLoops', () => {
  it('defaults to incorrect', () => {
    expect.assertions(1)
    const results = resultsForLoops({})
    for (const result of results) {
      expect(result.correct).toEqual(false)
    }
  })
  it('loops over names and calls console.log for each one', () => {
    let logNames = () => {}
    let result = resultsForLoops({ logNames })[0]
    expect(result.correct).toEqual(false)

    logNames = (names) => console.log(names)
    result = resultsForLoops({ logNames })[0]
    expect(result.correct).toEqual(false)

    logNames = (names) => {
      names.forEach(name => console.log('test'))
    }
    result = resultsForLoops({ logNames })[0]
    expect(result.correct).toEqual(false)

    logNames = (names) => {
      names.forEach(name => console.log(name))
    }
    result = resultsForLoops({ logNames })[0]
    expect(result.correct).toEqual(true)
  })
})
