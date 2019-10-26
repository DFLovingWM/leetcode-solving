const BASE = -2

var addNegabinary = function(arr1, arr2) {
  return num2Arr(arr2Num(arr1) + arr2Num(arr2))
};

function arr2Num (arr) {
  let result = 0
  for (let i = arr.length - 1; i >= 0; --i) {
    if (arr[i] === 1) {
      result += Math.pow(BASE, arr.length - 1 - i)
    }
  }
  return result
}

function num2Arr (n) {
  if (n === 0) return [0]

  let ret = []
  while (n !== 0) {
    let lastN = n
    n = Math.ceil(n / (-2))
    ret.unshift(lastN - BASE * n)
  }
  return ret
}

[
  [[1,1,1,1,1], [1,0,1]]
].forEach(input => {
  console.log(addNegabinary(...input))
})
