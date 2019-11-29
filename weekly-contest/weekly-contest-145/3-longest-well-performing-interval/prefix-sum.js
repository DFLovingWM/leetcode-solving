/**
 * 前缀和 + 最小值
 * 
 * 时间：`O(N^2)`, 384ms
 */
var longestWPI = function (hours) {
  // 化为0/1，求出前缀和数组
  let acc = 0
  const prefix = [acc]
  for (const hour of hours) {
    acc += hour > 8 ? 1 : -1
    prefix.push(acc)
  }

  let res = 0
  for (let i = 1; i < prefix.length; ++i) {
    for (let j = 0; j < i; ++j) {
      if (prefix[i] > prefix[j]) {
        res = Math.max(res, i - j)
        break
      }
    }
  }
  return res
};

module.exports = longestWPI