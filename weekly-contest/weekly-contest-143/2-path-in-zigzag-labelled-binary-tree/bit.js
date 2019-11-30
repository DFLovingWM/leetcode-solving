/**
 * 位操作
 * 
 * 时间：`O(logN)`, 80ms
 */
var pathInZigZagTree = function (label) {
  const res = []
  while (label !== 1) { // 防止位运算死循环，这里到1停止
    res.push(label)
    label = getParent(label)
  }
  return res.concat(1).reverse() // 因为没有1，所以要补上，然后再反转
};

function getParent (label) {
  // 右移1位
  label >>>= 1
  // 除了最高位，其它全部取反
  let n = 0
  for (let tmp = label; tmp; tmp >>>= 1) ++n
  --n
  return label ^ ((1 << n) - 1) // 跟1异或的每一位会取反
}

module.exports = pathInZigZagTree