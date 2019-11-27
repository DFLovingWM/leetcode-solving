/**
 * 双指针
 * 
 * 时间：O(N)
 * 空间：O(1)
 */
var trap = function(heights) {
  let [L, R] = [0, heights.length - 1]
  let [leftMax, rightMax] = [heights[L], heights[R]]
  let res = 0

  while (L <= R) {
    debugger
    if (leftMax < rightMax) { // 如果左比右小，取更小的即左边
      res += leftMax - heights[L]
      ++L
      leftMax = Math.max(leftMax, heights[L])
    } else { // 同理
      res += rightMax - heights[R]
      --R
      rightMax = Math.max(rightMax, heights[R])
    }
  }

  return res
};

[
  [0,1,0,2,1,0,1,3,2,1,2,1],
].forEach(h => {
  console.log(trap(h))
})