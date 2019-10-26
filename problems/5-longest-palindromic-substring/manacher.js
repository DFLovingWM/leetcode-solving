/**
 * Manacher(马拉车)算法：
 * 利用目前的最长子串的中心作为参照，找镜像点作为初始半径
 * 
 * 时间：O(N), 100ms
 */
function longestPalindrome (s) {
  const text = '#' + Array.from(s).join('#') + '#' // 字符串预处理
  const n = text.length

  const p = Array.from({ length: n }, () => 1) // 半径数组，初始化可以设为1
  let max = 0 // 当前最大右边界（开区间）
  let mid = -1 // 当前最大右边界对应的中心点

  for (let i = 0; i < n; ++i) {
    // 优化：
    // 如果在边界内，取镜像的半径作为初始半径
    // 但不能超过右边界，因为边界只能确定在边界之内的半径，左边界以左的管不到
    if (i < max) {
      p[i] = Math.min(p[2 * mid - i], max - i)
    }

    // 正常的扩展（探查下一个字符）
    while (i - p[i] >= 0 && i + p[i] < n && text[i - p[i]] === text[i + p[i]]) {
      ++p[i]
    }

    // 可能要更新最大右边界
    if (i + p[i] > max) {
      max = i + p[i]
      mid = i
    }
  }

  // 寻找答案
  let maxIndex = -1, maxValue = 0
  for (let i = 0; i < n; ++i) {
    if (p[i] > maxValue) {
      maxValue = p[i]
      maxIndex = i
    }
  }
  return text.slice(maxIndex - maxValue + 1, maxIndex + maxValue).replace(/#/g, '')
}

module.exports = longestPalindrome