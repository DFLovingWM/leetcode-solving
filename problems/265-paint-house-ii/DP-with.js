/**
 * DP：
 * 寻找minDP的过程可以提前用最小/最大数组优化成O(K)时间，总的就是O(NK)时间
 * 
 * 时间：O(NK)
 * 空间：O(NK)，因为对于N个房子，每个都建立长为K的min数组
 */
var minCostII = function(costs) {
  if (costs.length === 0) return 0

  const [n, k] = [costs.length, costs[0].length]
  const cur = createArray(k, 0) // DP数组
  for (let color = 0; color < k; ++color) {
    cur[color] = costs[0][color]
  }

  for (let i = 1; i < n; ++i) { // 对于每一个房子
    // 先算好每种颜色可选的最低费用
    const minCost = getMinExcludeSelf(cur)

    // 再遍历颜色
    for (let color = 0; color < k; ++color) {
      cur[color] = minCost[color] + costs[i][color]
    }
  }
  return Math.min(...cur)
};

/**
 * 获取最小数组（除了自己）
 * 时间：O(K)
 */
function getMinExcludeSelf (arr) {
  // 顺序最小栈（当前元素左边的最小值）
  const leftMin = createArray(arr.length, Infinity)
  let min = leftMin[0]
  for (let i = 1; i < arr.length; ++i) {
    min = Math.min(min, arr[i - 1])
    leftMin[i] = min
  }

  // 逆序最小栈（当前元素右边的最小值）
  const rightMin = createArray(arr.length, Infinity)
  min = rightMin[arr.length - 1]
  for (let i = arr.length - 2; i >= 0; --i) {
    min = Math.min(min, arr[i + 1])
    rightMin[i] = min
  }

  // 汇总（取更小值）
  const res = []
  for (let i = 0; i < arr.length; ++i) {
    res.push(Math.min(leftMin[i], rightMin[i]))
  }

  return res
}

function createArray (length, initialValue) {
  return Array.from({ length }, () => initialValue)
}

[
  [],
  [[1,5,3],[2,9,4]],
  [
    [20,19,11,13,12,16,16,17,15,9,5,18],
    [3,  8,15,17,19,8, 18,3, 11,6,7,12],
    [15, 4,11,1, 18,2, 10,9, 3, 6,4,15]],
].forEach(costs => {
  console.log(minCostII(costs))
})