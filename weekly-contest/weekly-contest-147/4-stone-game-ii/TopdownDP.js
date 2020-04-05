/**
 * top-down
 * 
 * 时间：O(N^3), 88ms
 */
var stoneGameII = function(piles) {
  const n = piles.length;
  const memo = new Map();

  // 当前从left开始、变量为m，最终能获取的最大纯收益
  function helper(left, m) {
    if (left >= n) {
      return 0;
    }
    const key = `${left}#${m}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let res = -Infinity;
    let sum = 0;
    for (let x = 1; x <= 2 * m && left + x - 1 < n; ++x) { // 取x堆
      const right = left + x - 1;
      sum += piles[right];
      const tmp = sum - helper(right + 1, Math.max(m, x)); // 记录我与对方的差值，即我的纯收益
      res = Math.max(res, tmp); // 记录最大纯收益
    }
    memo.set(key, res);
    return res;
  }

  const diff = helper(0, 1); // x - y
  const sum = piles.reduce((acc, item) => acc + item, 0); // x + y
  return (sum + diff) / 2;
};

module.exports = stoneGameII;