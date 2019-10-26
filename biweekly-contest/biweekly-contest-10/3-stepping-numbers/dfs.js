/**
 * 全排列，DFS实现
 * 
 * 时间：140ms
 */
var countSteppingNumbers = function (low, high) {
  let res = [0]
  for (let i = 1; i <= 9; ++i) {
    dfs(i, low, high, res)
  }
  
  res.sort((a, b) => a - b) // 需要手动排序

  // 排除low以下的
  let i = 0
  while (res[i] < low) ++i
  res = res.slice(i)

  return res
};

function dfs (curr, low, high, res) {
  if (curr > high) return

  // 本结点
  if (curr >= low) res.push(curr)

  // (2个)子结点
  const next = curr * 10 + curr % 10
  if (next % 10 !== 0) {
    dfs(next - 1, low, high, res)
  }
  if (next % 10 !== 9) {
    dfs(next + 1, low, high, res)
  }
}

module.exports = countSteppingNumbers