/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length

  // 记录[i, j]之间的最大高度
  const maxHeight = Array.from({ length: n }, () => Array.from({ length: n }, () => 0))
  for (let i = 0; i < n; ++i) {
    maxHeight[i][i] = books[i][1]
    for (let j = i + 1; j < n; ++j) {
      maxHeight[i][j] = Math.max(maxHeight[i][j - 1], books[j][1])
    }
  }

  // 记录前缀宽度
  let acc = 0
  const prefixWidth = [acc]
  for (const [width] of books) {
    acc += width
    prefixWidth.push(acc)
  }

  const cache = new Map()

  // 状态函数：当前轮到放`bi`、最后一行的第一本是`wi`、最终能达到的最小高度
  function helper (bi, wi) {
    if (bi === n) return maxHeight[wi][bi - 1] // 最后一行的高度

    const key = `${bi},${wi}`
    if (cache.has(key)) return cache.get(key)

    // 放下一行
    let res = helper(bi + 1, bi) + maxHeight[wi][bi - 1]
    // 放右边（如果该行剩余宽度能放下的话）
    const usedWidth = prefixWidth[bi] - prefixWidth[wi]
    if (books[bi][0] + usedWidth <= shelfWidth) {
      res = Math.min(res, helper(bi + 1, wi))
    }
    cache.set(key, res)
    return res
  }

  return helper(1, 0) // 第0本书只能放右边，所以相当于从第1本书开始
};

module.exports = minHeightShelves