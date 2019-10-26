/**
 * 递归（分治）：根据目标值(Y)的奇偶性，选择不同路径递归
 * 
 * 时间：64ms
 */
function brokenCalc (x, y) {
  if (x >= y) return x - y

  if (y % 2 === 0) { // 偶数：最后一步是乘2
    return brokenCalc(x, y / 2) + 1
  } else { // 奇数：最后一步是减1
    return brokenCalc(x, y + 1) + 1
  }
}

module.exports = brokenCalc