/**
 * 哈希优化
 * 
 * 时间：`O(N^2)`, 72ms
 * 空间：`O(N)`, 34MB
 */
var tictactoe = function (moves) {
  const n = 3
  const row = Array.from({ length: n }, () => [0, 0])
  const col = Array.from({ length: n }, () => [0, 0])
  const leftDiag = [0, 0], rightDiag = [0, 0]

  function check (ch) {
    // 检查每一行
    if (row.some(item => item[ch] === n)) return true
    // 检查每一列
    if (col.some(item => item[ch] === n)) return true
    // 检查对角线
    if (leftDiag[ch] === n || rightDiag[ch] === n) return true

    return false
  }

  for (let i = 0; i < moves.length; ++i) {
    const [x, y] = moves[i]
    const ch = i & 1

    ++row[x][ch]
    ++col[y][ch]
    if (x - y === 0) ++leftDiag[ch]
    if (x + y === n - 1) ++rightDiag[ch]

    if (i + 1 >= 2 * n - 1) { // 从第`2n-1`步开始判断
      if (check(0)) return 'A'
      if (check(1)) return 'B'
    }
  }

  if (moves.length === 9) return 'Draw'
  return 'Pending'
};

module.exports = tictactoe