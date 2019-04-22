let COUNT = 3

var canThreePartsEqualSum = function(arr) {
  let average = arr.reduce((sum, next) => sum + next, 0) / COUNT
  // if (!Number.isInteger(average)) return false
  let subsetSum = 0
  let count = 0
  for (let i = 0; i < arr.length; ++i) {
    subsetSum += arr[i]
    if (subsetSum === average) { // Every time equal => record and reset.
      subsetSum = 0
      ++count
    }
  }
  return count === COUNT
};

[
  [0,2,1,-6,6,-7,9,1,2,0,1],
  [0,2,1,-6,6,7,9,-1,2,0,1],
  [3,3,6,5,-2,2,5,1,-9,4]
].forEach(arr => {
  console.log(canThreePartsEqualSum(arr))
})