function resultsForArrays ({
  shoppingList,
  treeResult,
  favouriteBrowsers,
  names,
  arrLength
}) {
  return [
    {
      correct: shoppingList.includes('Mangosteen') && shoppingList.includes('Kiwifruit') && shoppingList.includes('Longan') && shoppingList.length === 3,
      response: JSON.stringify(shoppingList, null, 2),
      tip: shoppingList !== undefined ? ' <br/><br/> Nearly, check that all the values are included and exactly match the instructions (the test is case and whitespace sensitive!) <br/>' : ''
    },
    {
      correct: treeResult === 'Kahikatea',
      response: JSON.stringify(treeResult, null, 2),
      tip: treeResult !== undefined ? ' <br/><br/> Nearly, make sure you are accessing the first element with bracket notation!<br/>' : ''
    },
    {
      correct: favouriteBrowsers[0] === 'Brave' && favouriteBrowsers[0] !== 'Chrome',
      response: favouriteBrowsers[0],
      tip: favouriteBrowsers !== undefined ? ' <br/><br/> Nearly, make sure you are accessing the first element with bracket notation and matching the new value (as stated in the instructions) exactly!<br/>' : ''
    },
    {
      correct: arrLength === names.length && arrLength === 3,
      response: arrLength,
      tip: arrLength !== undefined ? ' <br/><br/> Nearly, use the name array and find out the length of that array. It should return a number.<br/>' : ''
    }
  ]
}

module.exports = resultsForArrays
