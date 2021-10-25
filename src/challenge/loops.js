//  -- for loop --
function addTo(n) {
  let sum = 0;
  for (let i = 0; i <= n; i++) {
    sum = sum + i;
  }
  return sum;
}

//  -- nested loop? --
let a = [[1, 7, 3], [2, 8, 5], [9, 0, 4]];
let sum = 0;
for (let i = 0; i < 3; i++) {
  for (let j = 0; j < 3; j++) {
    sum = sum + a[i][j];
  }
}

// ------------ CHECKS -----------
// The below line of code lets us test it to see how you're doing,
// don't worry about this yet you'll learn it in bootcamp. 

// Don't change any code below this comment!
module.exports = {}
