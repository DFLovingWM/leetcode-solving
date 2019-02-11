/**
 * @param {number[]} arr
 * @return {number[]}
 */
var sortedSquares = function (arr) {
  let L = 0,
      R = arr.length - 1,
      squareArr = []
  
  while (L <= R) {
    if (Math.abs(arr[L]) > Math.abs(arr[R])) {
      squareArr.unshift(arr[L] * arr[L])
      ++L
    } else {
      squareArr.unshift(arr[R] * arr[R])
      --R
    }
  }

  return squareArr
}

// console.log( sortedSquares([-4,-1,0,3,10]) )