/**
 * 解二元一次方程，注意验证结果的合法性
 */
var numOfBurgers = function (tomatoSlices, cheeseSlices) {
  let a = (tomatoSlices - cheeseSlices * 2) / 2
  let b = cheeseSlices - a
  if (a >= 0 && b >= 0 && Number.isInteger(a) && Number.isInteger(b)) {
    return [a, b]
  }
  return []
};

[
  [16, 7],
  [17, 4],
  [4, 17],
  [0, 0],
  [2, 1],
].forEach(input => {
  console.log(numOfBurgers(...input))
})