/**
 * DP
 */
var busRapidTransit = function(target, inc, dec, jumps, costs) {
  const memo = new Map();
  const mod = 1e9 + 7;

  // 回退
  function helper(i) {
    console.log(i)
    if (i === 0) return 0;

    const key = i;
    if (memo.has(key)) return memo.get(key);

    let res = Infinity;
    for (let j = 0; j < jumps.length; ++j) {
      let c1 = inc * (i % jumps[j]) + costs[j] + helper(Math.floor(i / jumps[j]));
      c1 %= mod;
      let c2 = dec * (jumps[j] - i % jumps[j]) + costs[j] + helper(Math.ceil(i / jumps[j]));
      c2 %= mod;
      res = Math.min(res, c1, c2);
    }
    memo.set(key, res);
    return res;
  }

  return helper(target);
};

[
  [31, 5, 3, [6], [10]],
  // [612, 4, 5, [3,6,8,11,5,10,4], [4,7,6,3,7,6,4]],
].forEach(A => {
  console.log(busRapidTransit(...A))
})