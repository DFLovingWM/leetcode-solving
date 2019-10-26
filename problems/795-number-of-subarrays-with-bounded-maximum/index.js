var numSubarrayBoundedMax = function(arr, lRange, rRange) {
  let result = 0, count = 0
  let L = 0, R = 0

  while (R < arr.length) {
    if (arr[R] >= lRange && arr[R] <= rRange) { // Legal.
      count = R - L + 1
      result += 
    }
  }

  return result
};

[
  [[2, 1, 4, 3], 2, 3]
].forEach(input => {
  console.log(numSubarrayBoundedMax(...input))
})