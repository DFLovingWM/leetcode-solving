/**
 * 算奇偶个数，最小代价 = 更少者 * 1
 */
var minCostToMoveChips = function (chips) {
  let oddCount = 0, evenCount = 0
  for (const n of chips) {
    if (n % 2) {
      ++oddCount
    } else {
      ++evenCount
    }
  }
  return Math.min(oddCount, evenCount)
};

[
  [1,2,3],
  [2,2,2,3,3],
  [6,4,7,8,2,10,2,7,9,7],
].forEach(chips => {
  console.log(minCostToMoveChips(chips))
})