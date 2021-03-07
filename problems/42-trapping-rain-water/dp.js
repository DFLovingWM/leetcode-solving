/**
 * 动态规划：对于每个元素，求左边的最大值、右边的最大值
 * 
 * 时间：O(2N)=O(N)
 * 空间：O(2N)=O(N)
 */
var trap = function(heights) {
  const length = heights.length

  // 顺序最大（直接获取元素左边的最大值）
  const leftMax = Array.from({ length }, () => -Infinity)
  for (let i = 1; i < length; ++i) {
    leftMax[i] = Math.max(leftMax[i - 1], heights[i - 1])
  }

  // 逆序最大
  const rightMax = Array.from({ length }, () => -Infinity)
  for (let i = length - 2; i >= 0; --i) {
    rightMax[i] = Math.max(rightMax[i + 1], heights[i + 1])
  }

  let res = 0
  for (let i = 1; i < heights.length - 1; ++i) {
    // 取更小值
    let rain = Math.min(leftMax[i], rightMax[i])
    // 但该位置可能有屋檐，要减去
    res += Math.max(rain - heights[i], 0)
  }

  return res
};

[
  [0,1,0,2,1,0,1,3,2,1,2,1],
].forEach(h => {
  console.log(trap(h))
})