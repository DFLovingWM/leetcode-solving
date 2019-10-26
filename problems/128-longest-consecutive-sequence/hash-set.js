/**
 * Set记录
 * 
 * 时间：O(N), 72ms
 */
var longestConsecutive = function (nums) {
  const set = new Set(nums)
  let res = 0

  for (let n of set) {
    if (set.has(n - 1)) {
      // 2、因为探索是向前的（加1），这里表示该数字不需要作为搜索起点
      // 重要的优化，保证了O(N)时间
      continue
    }

    let count = 1
    while (set.has(n + 1)) { // 1、向前探查，看看有没有(N+1)
      ++count
      n = n + 1
    }

    res = Math.max(res, count) // 更新答案
  }

  return res
};

[
  [100, 4, 200, 1, 3, 2]
].forEach(arr => {
  console.log(longestConsecutive(arr))
})