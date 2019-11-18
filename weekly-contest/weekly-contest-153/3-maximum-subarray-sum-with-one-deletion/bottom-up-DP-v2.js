/**
 * Bottom-up DP（空间优化版本）
 * 
 * 时间：`O(N)`, 76ms
 * 空间：`O(1)`, 39MB
 */
var maximumSum = function (arr) {
  // 因为至少要选一个，所以取第一个元素，作为初始值
  let [one, zero] = [arr[0], -Infinity]
  let res = Math.max(one, zero)

  for (let i = 1; i < arr.length; ++i) {
    zero = Math.max(
      arr[i], // 单独
      zero + arr[i], // 接上
      one // 接上，但删除本元素
    )
    // 注：这里必须将one放在zero后更新，因为上面的zero需要用到旧的one
    // 或者如果用滚动数组，就不必在乎
    one = Math.max(
      arr[i], // 单独
      one + arr[i] // 接上
    )

    res = Math.max(res, zero, one)
  }

  return res
};

module.exports = maximumSum