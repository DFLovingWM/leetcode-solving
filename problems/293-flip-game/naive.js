/**
 * 线性检测`++`即可
 * 
 * 时间：`O(N)`, 68ms
 */
var generatePossibleNextMoves = function(curr) {
  const nexts = [];
  for (let i = 0; i + 1 < curr.length; ++i) {
      if (curr[i] === '+' && curr[i + 1] === '+') { // 连续的'++'
        const next = curr.slice(0, i) + '--' + curr.slice(i + 2);
        nexts.push(next);
      }
  }
  return nexts;
};