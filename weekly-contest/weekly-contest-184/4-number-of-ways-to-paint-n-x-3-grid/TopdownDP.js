/**
 * Top-down DP
 * 
 * 时间：O(27N) = O(N), 780ms
 * 空间：O(27N) = O(N), 99.4MB
 */
var numOfWays = function (n) {
  const MOD = 1e9 + 7;
  const memo = new Map();
  
  // 当前在第`r`行，上一行的颜色分别为`p1/p2/p3`，最终的方案数
  function helper(r, p1, p2, p3) {
    if (r >= n) return 1;

    const key = `${r},${p1},${p2},${p3}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    // 遍历所有（表示当前行颜色的）三元组(c1, c2, c3)
    for (let c1 = 0; c1 < 3; ++c1) {
      if (c1 === p1) continue; // c1要与上边的不同
      for (let c2 = 0; c2 < 3; ++c2) {
        if (c2 === c1 || c2 === p2) continue; // c2要与上边、左边的不同
        for (let c3 = 0; c3 < 3; ++c3) {
          if (c3 === c2 || c3 === p3) continue; // c3也要与上边、左边的不同
          res += helper(r + 1, c1, c2, c3);
          res %= MOD;
        }
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, -1, -1, -1);
};

[
  1,2,3,7,5000
].forEach(n => {
  console.log(numOfWays(n))
})