/**
 * 背包 + 位压缩 + 二分查找（@todo 最后一个测试用例过不了，暂不知为啥）
 * 
 * 时间：96ms
 */
var maxLength = function (words) {
  const dp = [[0, 0]]

  for (const word of words) {
    const bits = getBits(word)
    if (bits === -1) continue

    const prev = dp[bisectRight(dp, bits, 0, dp.length)] // 寻找不冲突的最大值
    const sum = [bits ^ prev[0], countOnes(bits) + prev[1]]
    if (sum[1] > dp[dp.length - 1][1]) {
      dp.push(sum)
    }
  }

  return dp[dp.length - 1][1]
};

// 单词转化为bitset
function getBits (word) {
  let res = 0
  for (const ch of word) {
    const tmp = 1 << (ch.charCodeAt(0) - 'a'.charCodeAt(0))
    if (tmp & res) return -1 // 重复字符
    res ^= tmp
  }
  return res
}

// 数二进制表示的1的个数
function countOnes (bits) {
  let res = 0
  while (bits) {
    if (bits & 1) ++res
    bits = bits >>> 1
  }
  return res
}

// 二分查找
function bisectRight (dp, x, left, right) {
  while (left < right) {
    const mid = left + (right - left >> 1)
    if (!(x & dp[mid][0])) { // 不冲突
      left = mid + 1
    } else {
      right = mid
    }
  }
  return left - 1
}

module.exports = maxLength