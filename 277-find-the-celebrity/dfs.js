/**
 * DFS涂色
 * 
 * 时间：O(N^2), 736ms
 */
var solution = function (knows) {
  return function (n) {
    const visit = new Set()

    // 开始递归
    for (let i = 0; i < n; ++i) {
      if (!visit.has(i)) {
        dfs(n, knows, visit, i)
      }
    }

    // 找结果
    if (n - visit.size !== 1) return -1
    let candidate
    for (let i = 0; i < n; ++i) {
      if (!visit.has(i)) {
        candidate = i
        break
      }
    }
    for (let i = 0; i < n; ++i) {
      if (i !== candidate && !knows(i, candidate)) {
        candidate = -1
        break
      }
    }
    return candidate
  };
};

// 递归函数
function dfs (n, knows, visit, i) {
  for (let j = 0; j < n; ++j) {
    if (j === i) continue

    if (knows(i, j)) {
      visit.add(i)

      if (!visit.has(j)) {
        dfs(n, knows, visit, j)
        return
      }
    }
  }
}

module.exports = solution