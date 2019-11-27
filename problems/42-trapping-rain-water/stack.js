/**
 * 单调递减的栈
 * 
 * 时间：`O(N)`, 72ms
 */
var trap = function (heights) {
  const mono = []
  let res = 0

  for (let i = 0; i < heights.length; ++i) {
    while (mono.length > 0 && heights[i] > heights[mono[mono.length - 1]]) { // 212模式
      const mid = mono.pop()
      if (mono.length > 0) {
        const left = mono[mono.length - 1]
        const h = Math.min(heights[left], heights[i]) - heights[mid] // 可以增加的高度
        const w = i - left - 1
        res += h * w
      }
    }
    mono.push(i)
  }

  return res
};

module.exports = trap