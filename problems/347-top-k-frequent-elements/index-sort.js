/**
 * O(N)解法：利用数组下标来自然排序
 * 时间：O(N)，72ms
 * 空间：最多O(N)，38.7MB
 * 参考：https://leetcode.com/problems/top-k-frequent-elements/discuss/81602/Java-O(n)-Solution-Bucket-Sort
 */
var topKFrequent = function(nums, K) {
  const countMap = counter(nums)

  const maxCount = Math.max(...Array.from(countMap.values())) // 确定数组大小：以最大次数作为长度
  const arr = Array.from({ length: maxCount + 1 }, () => [])
  for (const [num, count] of countMap.entries()) {
    arr[count].push(num)
  }

  // 挑K个次数最多的数字
  const answers = []
  for (let i = arr.length - 1; i >= 1; --i) {
    for (const num of arr[i]) {
      answers.push(num)
      if (answers.length === K) {
        return answers
      }
    }
  }
}

function counter (arr) {
  const countMap = new Map()
  for (const n of arr) {
    if (!countMap.has(n)) countMap.set(n, 0)
    countMap.set(n, countMap.get(n) + 1)
  }
  return countMap
}

[
  [[1,1,1,2,2,3], 2],
  [[1], 1],
].forEach(input => {
  console.log(topKFrequent(...input))
})
