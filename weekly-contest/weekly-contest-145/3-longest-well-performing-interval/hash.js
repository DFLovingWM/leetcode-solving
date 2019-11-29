/**
 * 前缀和 + 哈希表
 * 参考[lee215: [Java/C++/Python] O(N) Solution, Life needs 996 and 669](https://leetcode.com/problems/longest-well-performing-interval/discuss/334565/JavaC%2B%2BPython-O(N)-Solution-Life-needs-996-and-669)
 * 
 * 时间：`O(N)`, 88ms
 */
var longestWPI = function (hours) {
  let acc = 0
  const firstAppear = new Map() // 记录第一次出现的下标（最小下标）
  let res = 0

  for (const [i, hour] of hours.entries()) {
    acc += (hour > 8 ? 1 : -1)

    if (acc > 0) { // 大于0，则与头相连是最长的
      res = i + 1
    } else {
      if (!firstAppear.has(acc)) {
        firstAppear.set(acc, i)
      }
      // 如果存在(acc - 1)，因为值是连续的整数，所以与之相连一定最长
      if (firstAppear.has(acc - 1)) {
        res = Math.max(res, i - firstAppear.get(acc - 1))
      }
    }
  }

  return res
};

module.exports = longestWPI