/**
 * Top-down DP
 * 
 * 时间：O(MTN^2), 372ms
 * 空间：O(MNT)
 */
var minCost = function(houses, cost, m, n, target) {
  const memo = new Map();

  function helper(row, lastColor, blockCount) {
    if (row === m) {
      if (blockCount === target) {
        return 0;
      }
      return Infinity;
    }
    if (blockCount > target) { // 提前fail
      return Infinity;
    }

    const key = `${row}|${lastColor}|${blockCount}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let res = Infinity;
    if (houses[row] !== 0) { // 策略1：已有颜色，则不涂色
      res = helper(row + 1, houses[row], blockCount + (houses[row] === lastColor ? 0 : 1));
    } else { // 策略2：涂色（遍历每种颜色/每一列）
      for (let j = 0; j < n; ++j) {
        const color = j + 1;
        const tmp = cost[row][j] + helper(row + 1, color, blockCount + (color === lastColor ? 0 : 1));
        res = Math.min(res, tmp);
      }
    }
    memo.set(key, res);
    return res;
  }

  const res = helper(0, 0, 0);
  return res === Infinity ? -1 : res;
};

[
  [[0,0,0,0,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3],
  [[0,2,1,2,0], [[1,10],[10,1],[10,1],[1,10],[5,1]], 5, 2, 3],
  [[0,0,0,0,0], [[1,10],[10,1],[1,10],[10,1],[1,10]], 5, 2, 5],
  [[3,1,2,3], [[1,1,1],[1,1,1],[1,1,1],[1,1,1]], 4, 3, 3],
].forEach(A=> {
  console.log(minCost(...A));
})
