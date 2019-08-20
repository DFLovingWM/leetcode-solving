/**
 * 思路一样但代码更少的解法，参考votrubac：
 * https://leetcode.com/problems/matrix-cells-in-distance-order/discuss/278708/O(n)-with-picture
 * 
 * 160ms
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  const res = []
  const tryInsert = (r, c) => {
    if (r >= 0 && r < R && c >= 0 && c < C) {
      res.push([r, c])
    }
  }
  
  res.push([r0, c0])
  let maxRadius = R + C
  for (let radius = 1; radius <= maxRadius; ++radius) { // radius为半径，逐渐增大
    for (let rOffset = -radius; rOffset <= radius; ++rOffset) { // rOffset为横坐标偏移量
      let r = r0 + rOffset
      let cRight = c0 + (radius - Math.abs(rOffset))
      tryInsert(r, cRight)
      
      if (Math.abs(rOffset) < radius) { // 如果不是top/bottom，则有关于 y=c0 对称的另一点
        let cLeft = c0 - (radius - Math.abs(rOffset))
        tryInsert(r, cLeft)
      }
    }
  }

  return res
};

[
  [1,2,0,0],
  [2,2,0,1],
  [2,3,1,2],
].forEach(input => {
  console.log(allCellsDistOrder(...input))
})