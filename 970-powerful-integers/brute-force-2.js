/**
 * 暴力：二重循环
 */
function powerfulIntegers(x, y, bound) {
  let c1 = Array.from({ length: bound + 1 }, _ => false)

  let xBound = bound, xStep = x
  let yBound = bound, yStep = y
  if (x === 1) {
    xBound = 1
    xStep = 2
  }
  if (y === 1) {
    yBound = 1
    yStep = 2
  }

  for (let i = 1; i <= xBound; i *= xStep) {
    for (let j = 1; j <= yBound; j *= yStep) {
      if (i + j <= bound) {
        c1[i + j] = true
      }
    }
  }

  let result = []
  for (let i = 0; i <= bound; ++i) {
    if (c1[i]) {
      result.push(i)
    }
  }
  return result
}

// console.log(  powerfulIntegers(1, 2, 100))
// console.log(  powerfulIntegers(1, 1, 100))

// module.exports = powerfulIntegers