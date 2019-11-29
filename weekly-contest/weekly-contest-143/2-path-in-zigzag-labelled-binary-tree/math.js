/**
 * 不必建树，找规律即可（下标，反转）
 * 
 * 时间：`O(logN)`
 */
var pathInZigZagTree = function (label) {
  const res = []

  for (let i = 0; label > 0; ++i) {
    res.push(i & 1 ? mirror(label) : label)
    label = label >>> 1
  }

  return res.reverse()
};

// 获取镜像下标
function mirror (i) {
  // 找左右边界
  const L = Math.floor(Math.log2(i))
  const R = L + 1
  const left = 1 << L
  const right = (1 << R) - 1

  // 计算同等距离的镜像
  return left + right - i
}

[
  14,
  16,
  26,
].forEach(n => {
  console.log(pathInZigZagTree(n))
})