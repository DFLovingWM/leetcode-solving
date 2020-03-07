/**
 * 回溯
 * 
 * 时间：O(), 100ms
 * 空间：O(N), 43.1MB
 */

const DIRS = [[-1, 0], [0, -1], [1, 0], [0, 1]];

var exist = function (board, word) {
  const boardFreq = new Map();
  const R = board.length, C = board[0].length;
  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      const ch = board[i][j];
      boardFreq.set(ch, (boardFreq.get(ch) || 0) + 1);
    }
  }

  const wordFreq = new Map();
  for (const ch of word) {
    wordFreq.set(ch, (wordFreq.get(ch) || 0) + 1);
  }

  let contain = true;
  for (const [ch, need] of wordFreq) {
    if ((boardFreq.get(ch) || 0) < need) {
      contain = false;
      break;
    }
  }
  if (!contain) return false; // 如果对于某个字符，整个board的频次都不够 => 直接失败

  function isValid(r, c) {
    return r >= 0 && r < R && c >= 0 && c < C;
  }

  // 递归函数，用以回溯
  // 将要匹配`word[i]`与`board[i][j]`
  function backtrack(r, c, i, visit = new Set()) {
    if (i === word.length) return true;

    const key = r * C + c;
    if (!isValid(r, c) || visit.has(key) || word[i] !== board[r][c]) return false;

    // 探索
    visit.add(key);
    // 扩展
    for (const dir of DIRS) {
      const nr = r + dir[0];
      const nc = c + dir[1];
      if (backtrack(nr, nc, i + 1, visit)) return true;
    }
    // 回溯
    visit.delete(key);

    return false;
  }

  for (let i = 0; i < R; ++i) {
    for (let j = 0; j < C; ++j) {
      if (backtrack(i, j, 0)) return true;
    }
  }
  return false;
};