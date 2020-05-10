/**
 * Top-down DP
 * 
 * 时间：O(KN^5), 236ms
 * 空间：O(KN^4)
 */
let ways = function (pizza, K) {
  const MOD = 1e9 + 7;
  const [m, n] = [pizza.length, pizza[0].length];

  // 预处理：根据容斥原理，求出矩形内是否存在pizza
  // prefix[i][j]表示 前i行j列的矩阵中 pizza数目
  const prefix = Array.from({ length: m + 1 }, () => Array.from({ length: n + 1 }, () => 0));
  for (let i = 1; i <= m; ++i) {
    for (let j = 1; j <= n; ++j) {
      prefix[i][j] = prefix[i][j - 1] + prefix[i - 1][j] - prefix[i - 1][j - 1] + num(pizza[i - 1][j - 1]);
    }
  }

  // 求(r1,c1) ~ (r2,c2)矩阵中是否存在pizza
  function hasPizza(r1, c1, r2, c2) {
    const num = prefix[r2 + 1][c2 + 1] - prefix[r1][c2 + 1] - prefix[r2 + 1][c1] + prefix[r1][c1];
    return num > 0;
  }

  const memo = new Map();
  
  function helper(r1, c1, r2, c2, k) {
    if (k === K - 1) {
      return 1;
    }

    const key = `${r1}|${c1}|${r2}|${c2}|${k}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let res = 0;
    // 每一刀都需要保证两边有pizza
    // 横切
    for (let i = r1; i < r2; ++i) {
      if (hasPizza(r1, c1, i, c2) && hasPizza(i + 1, c1, r2, c2)) {
        res += helper(i + 1, c1, r2, c2, k + 1);
        res %= MOD;
      }
    }
    // 垂切
    for (let i = c1; i < c2; ++i) {
      if (hasPizza(r1, c1, r2, i) && hasPizza(r1, i + 1, r2, c2)) {
        res += helper(r1, i + 1, r2, c2, k + 1);
        res %= MOD;
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0, m - 1, n - 1, 0);
};

function num(e) {
  return e === 'A' ? 1 : 0;
}

module.exports = ways;