/**
 * Top-down DP
 * 
 * 时间：O(RCN) ~= O(50^3), 124ms
 * 空间：O(RCN)
 */
var findPaths = function (m, n, N, i, j) {
  const MOD = 1e9 + 7;
  const memo = new Map();
  const DIRS = [[-1, 0], [0, -1], [1, 0], [0, 1]];

  function isValid(r, c) {
    return r >= 0 && r < m && c >= 0 && c < n;
  }

  // 当前在(r,c)，还剩n次机会
  function helper(r, c, n) {
    if (!isValid(r, c)) return 1; // 已经出界了，就可以算作1
    if (n === 0) return 0; // 机会用完但是还是没出界，算作0

    const key = `${r},${c},${n}`;
    if (memo.has(key)) return memo.get(key);

    // 4个方向对应4种策略
    let res = 0;
    for (const [ro, co] of DIRS) {
      const nr = r + ro;
      const nc = c + co;
      res += helper(nr, nc, n - 1);
      res %= MOD;
    }
    memo.set(key, res);
    return res;
  }

  return helper(i, j, N);
};

module.exports = findPaths;