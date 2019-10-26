var maxScoreSightseeingPair = function(arr) {
  let result = -Infinity
  let bestNumber = arr[0], bestIndex = 0
  for (let i = 1; i < arr.length; ++i) {
    const score = arr[i] + arr[bestIndex] - (i - bestIndex)
    result = Math.max(result, score)

    if ( // 盈 > 亏
      arr[i] >= bestNumber ||
      i - bestIndex > bestNumber - arr[i]
    ) {
      bestNumber = arr[i]
      bestIndex = i
    }
  }
  return result
};

[
  [8,1,5,2,6],
  [1,3,5],
  [3,7,2,3],
  [5,7,4,10,4],
  [1,2,2]
].forEach(spots => {
  console.log(maxScoreSightseeingPair(spots))
})

/**
 * 11
 * 7
 * 9
 * 15
 * 3
 */