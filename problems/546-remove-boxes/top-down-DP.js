/**
 * Top-down DP
 * 
 * 时间：O(N^3)
 */
var removeBoxes = function (boxes) {
  const cache = new Map()
  
  function getKey (left, right, k) {
    return `${left}, ${right}, ${k}`
  }

  function dfs (left, right, k) {
    if (left > right) return 0

    const key = getKey(left, right, k)
    if (cache.has(key)) return cache.get(key)

    let res
    while (right - 1 >= left && boxes[right - 1] === boxes[right]) {
      --right
      ++k
    }

    // 策略1：合并结尾的(k+1)个boxes[right]
    res = dfs(left, right - 1, 0) + (k + 1) * (k + 1)

    // 策略2：如果boxes[i]与boxes[right]相等，则考虑先删除[i+1, right-1]之间的数字（使得两头能够连起来）
    for (let i = left; i < right; ++i) {
      if (boxes[i] === boxes[right]) {
        const tmp = dfs(i + 1, right - 1, 0) + // 先删除[i+1, right-1]（因为右端点是新的数字，所以数量为0）
          dfs(left, i, k + 1) // 再合并（i右边总是有k+1个相同数字）
        res = Math.max(res, tmp)
      }
    }

    cache.set(key, res)
    return res
  }

  return dfs(0, boxes.length - 1, 0)
};

module.exports = removeBoxes