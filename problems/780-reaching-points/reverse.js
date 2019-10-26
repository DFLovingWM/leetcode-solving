/**
 * 逆推
 * 
 * 时间：64ms
 */
var reachingPoints = function (startX, startY, x, y) {
  while (x >= 1 && y >= 1) { // 题目给定范围
    if (x === startX && y === startY) return true

    if (x > y) {
      // 优化：x与y可能相差很大，所以这里需要直接减去y的N倍(N >= 1)，同时保证减去后x >= startX
      x -= Math.max(Math.floor((x - startX) / y), 1) * y
    } else {
      // 同上
      y -= Math.max(Math.floor((y - startY) / x), 1) * x
    }
  }

  return false
};

[
  [1,1,3,5],
  [1,1,2,2],
  [1,1,1,1],
  [1,1,1000000000,8],
].forEach(input => {
  console.log(reachingPoints(...input))
})