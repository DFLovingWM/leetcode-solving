/**
 * 二分查找（递归版）：需要包含所有点
 * 
 * 时间：`O(logN)`, 72ms
 */
var countShips = function (sea, high, low) {
  const [highX, highY] = high
  const [lowX, lowY] = low
  if (highX < lowX || highY < lowY) return 0 // 非法（NULL结点）
  if (!sea.hasShips(high, low)) return 0 // 如果往下没有船了，则可以回头（剪枝）
  if (highX === lowX && highY === lowY) return 1 // 收敛到一个点并有船（叶子结点）

  // 二分
  const [midX, midY] = [highX + lowX >>> 1, highY + lowY >>> 1]
  
  const bl = [[midX, midY], low] // 左下
  const tr = [high, [midX + 1, midY + 1]] // 右上
  const tl = [[midX, highY], [lowX, midY + 1]] // 左上
  const br = [[highX, midY], [midX + 1, lowY]] // 右下
  return countShips(sea, ...bl) + countShips(sea, ...tr) + countShips(sea, ...tl) + countShips(sea, ...br)
};

module.exports = countShips