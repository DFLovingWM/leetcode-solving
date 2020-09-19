/**
 * DP：从终点回退
 * 
 * 时间：116ms
 */
var busRapidTransit = function(target, inc, dec, jumps, costs) {
  const MOD = 1e9 + 7;
  const memo = new Map();

  /**
   * 当前在位置`curr`，最终【倒退】到0所需要的最小代价
   */
  function helper(curr) {
    if (curr === 0) return 0;
    if (curr === 1) return inc; // 注：该边界是必须的，避免死递归

    if (memo.has(curr)) return memo.get(curr);

    // 1、全程走路
    let res = inc * curr;
    let next, total;
    for (let i = 0; i < jumps.length; ++i) {
      // 2、往左边走一点再坐公交
      next = Math.floor(curr / jumps[i]);
      total = inc * (curr % jumps[i]) + costs[i] + helper(next);
      res = Math.min(res, total);

      // 3、往右边走一点再坐公交
      next = Math.ceil(curr / jumps[i]);
      total = dec * (jumps[i] - curr % jumps[i]) + costs[i] + helper(next);
      res = Math.min(res, total);
    }
    memo.set(curr, res);
    return res;
  }

  return helper(target) % MOD;
};

module.exports = busRapidTransit;
