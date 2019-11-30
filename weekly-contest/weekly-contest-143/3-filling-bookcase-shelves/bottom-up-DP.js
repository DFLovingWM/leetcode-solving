/**
 * Bottom-up DP
 * 
 * 时间：平均`O(N * (N / W))`，最差O(N^2), 64ms
 */
var minHeightShelves = function (books, shelfWidth) {
  const n = books.length
  // dp[i]表示放置前`i`本书（在最后一行的结尾处）的最小高度
  const dp = Array.from({ length: n + 1 }, () => Infinity)
  dp[0] = 0

  for (let i = 1; i <= n; ++i) {
    let [sumWidth, maxHeight] = [0, 0]
    let min = Infinity

    for (let j = i - 1; j >= 0; --j) { // 逆序遍历：寻找能放在最后一行的左边界`j`
      const [w, h] = books[j]
      if (sumWidth + w > shelfWidth) break // `j~i`的宽度已经超出一行了，直接退出

      sumWidth += w
      maxHeight = Math.max(maxHeight, h)
      min = Math.min(min, dp[j] + maxHeight) // dp[j] + maxHeight：表示将`j~i`放到最后一行
    }

    dp[i] = min
  }

  return dp[n]
};

module.exports = minHeightShelves