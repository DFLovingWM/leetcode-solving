/**
 * DP
 */
var cherryPickup = function(grid) {
  const [m, n] = [grid.length, grid[0].length];
  const memo = new Map();

  function isValid(col) {
    return col >= 0 && col < n;
  }

  function helper(r, ca, cb) {
    if (r === m) return 0;
    
    const key = `${r}|${ca}|${cb}`;
    if (memo.has(key)) return memo.get(key);

    let res = -Infinity;
    const acc = (ca === cb ? grid[r][ca] : grid[r][ca] + grid[r][cb]);
    for (let i = -1; i <= 1; ++i) {
      for (let j = -1; j <= 1; ++j) {
        const nca = ca + i;
        const ncb = cb + j;
        if (isValid(nca) && isValid(ncb)) {
          res = Math.max(res, acc + helper(r + 1, nca, ncb));
        }
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0, n - 1);
};