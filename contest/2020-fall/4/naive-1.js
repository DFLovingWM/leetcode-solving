/**
 * DP
 */
var busRapidTransit = function(target, inc, dec, jumps, costs) {
  const memo = new Map();
  const mod = 1e9 + 7;

  function helper(i) {
    if (i === target) return 0;

    const key = i;
    if (memo.has(key)) return memo.get(key);

    let res = Infinity;
    // 全程走路
    const walk = Math.abs(target - i) * (i < target ? inc : dec) % mod;
    res = Math.min(res, walk);
    // 走一点 + 坐巴士
    if (i > 0) {
      for (let j = 0; j < jumps.length; ++j) {
        let cost = costs[j] + inc * (i % jumps[j]) + helper(Math.floor(i / jumps[j]));
        cost %= mod;
        res = Math.min(res, cost);
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(0);
};

[
  [31, 5, 3, [6], [10]],
  // [612, 4, 5, [3,6,8,11,5,10,4], [4,7,6,3,7,6,4]],
].forEach(A => {
  console.log(busRapidTransit(...A))
})