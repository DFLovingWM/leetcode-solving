/**
 * 模拟
 * 
 * 时间：O(NlogM) ~= O(30000)
 */
var distributeCandies = function (candies, n) {
  const res = new Array(n).fill(0)
  for (let i = 0; candies > 0; ++i) {
    const dispatch = Math.min(candies, i + 1)
    res[i % n] += dispatch
    candies -= dispatch
  }
  return res
};

[
  [7,4],
  [10,3],
].forEach(input => {
  console.log(distributeCandies(...input))
})