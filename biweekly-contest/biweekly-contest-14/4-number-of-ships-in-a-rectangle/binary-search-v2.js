/**
 * 二分查找 + 剪枝
 * 
 * 时间：`O(logN)`, 60ms
 */
var countShips = function (sea, high, low) {

  function helper (sea, high, low) {
    const [highX, highY] = high
    const [lowX, lowY] = low

    if (highX < lowX || highY < lowY) return 0 // 非法（NULL结点）
    if (!sea.hasShips(high, low)) return 0 // 如果往下没有船了，则可以回头（剪枝）
    if (highX === lowX && highY === lowY) return 1 // 收敛到一个点并有船（叶子结点）

    // 二分
    const [midX, midY] = [highX + lowX >>> 1, highY + lowY >>> 1]
    let res = 0
    
    const bl = [[midX, midY], low] // 左下
    res += helper(sea, ...bl)
    if (res === 10) return res
    
    const tr = [high, [midX + 1, midY + 1]] // 右上
    res += helper(sea, ...tr)
    if (res === 10) return res

    const tl = [[midX, highY], [lowX, midY + 1]] // 左上
    res += helper(sea, ...tl)
    if (res === 10) return res

    const br = [[highX, midY], [midX + 1, lowY]] // 右下
    res += helper(sea, ...br)
    if (res === 10) return res
    
    return res
  }

  return helper(sea, high, low)
};

module.exports = countShips