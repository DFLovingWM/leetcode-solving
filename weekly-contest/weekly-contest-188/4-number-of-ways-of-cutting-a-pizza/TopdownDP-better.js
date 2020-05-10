/**
 * Top-down DP
 * 
 * 时间：O(KN^3), 156ms
 * 空间：O(KN^2)
 */
let ways = function (pizza, K) {
  const MOD = 1e9 + 7;
  const [m, n] = [pizza.length, pizza[0].length];

  // prefix[i][j]表示(i, j)到右下角的矩形中苹果的数量
  const prefix = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  for (let i = m - 1; i >= 0; --i) {
    for (let j = n - 1; j >= 0; --j) {
      prefix[i][j] = num(pizza[i][j]);
      if (i === m - 1 && j === n - 1) continue;
      if (i === m - 1) {
        prefix[i][j] += prefix[i][j+1];
      } else if (j === n - 1) {
        prefix[i][j] += prefix[i+1][j]
      } else {
        prefix[i][j] += prefix[i+1][j] + prefix[i][j+1] - prefix[i+1][j+1];
      }
    }
  }

  const memo = new Map();
  
  // 当前矩形左上角为(r, c)、已切k刀，返回总方案数
  function helper(r, c, k) {
    if (k === K - 1) return 1;

    const key = `${r}|${c}|${k}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    // 横切
    for (let i = r + 1; i < m; ++i) { // i表示下方矩形的第一行
      const top = prefix[r][c] - prefix[i][c];
      const bottom = prefix[i][c];
      if (top > 0 && bottom > 0) {
        res += helper(i, c, k + 1);
        res %= MOD;
      }
    }
    // 竖切
    for (let j = c + 1; j < n; ++j) { // j表示右方矩形的第一列
      const left = prefix[r][c] - prefix[r][j];
      const right = prefix[r][j];
      if (left > 0 && right > 0) {
        res += helper(r, j, k + 1);
        res %= MOD;
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0, 0);
};

function num(e) {
  return e === 'A' ? 1 : 0;
}

module.exports = ways;