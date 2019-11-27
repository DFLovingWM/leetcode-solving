/**
 * 哈希表
 */
var largestUniqueNumber = function (A) {
  const freq = new Map()
  for (const n of A) {
    freq.set(n, (freq.get(n) || 0) + 1)
  }

  const nums = Array.from(freq.keys()).sort((a, b) => b - a) // 数字降序排序

  for (const n of nums) {
    if (freq.get(n) === 1) return n
  }
  return -1
};

[
  [5,7,3,9,4,9,8,3,1],
  [9,9,8,8],
].forEach(A => {
  console.log(largestUniqueNumber(A))
})