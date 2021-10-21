// -- return arr -- 
// Write a function `toArray` that takes 2 values and returns these values in an array.
// Example: toArray(5, 9) should return the array [5, 9].

function toArray(a, b) {
  return [a, b]
}

//  -- get arr elements --
// Write a function `getFirst` that takes an array and returns the first value in the array.
// Example: getFirst(['Brave', 'Chrome', 'Firefox']) returns 'Brave'

function getFirst(arr) {
  return arr[0]
}

//  -- set arr elements --
// Write a function `setFavouriteAsFirst` that takes an array and a variable.
// The variable should be inserted as the first element in the array. The array should be returned.
// Example: setFavouriteAsFirst(['Chrome', 'Firefox'], 'Brave') should return ['Brave', 'Firefox', 'Chrome'].

function setFavouriteAsFirst (arr, fave) {
  arr[0] = fave
  return arr
}

// -- arr length --
// Write a function `getLeastFavourite` that returns the last element in the array.
// Example: getLeastFavourite(['Brave', 'Chrome', 'Firefox']) should return 'Firefox'.

function getLeastFavourite (arr) {
  const last = arr.length - 1
  return arr[last]
}