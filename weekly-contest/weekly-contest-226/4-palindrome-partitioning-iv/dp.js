/**
 * 预处理
 * 时间：O(N^2), 3128ms
 */
var checkPartitioning = function(s) {
  const n = s.length;

  // 预处理
  const can = Array.from({ length: n + 1 }, () => Array.from({ length: n + 1 }, () => false));
  const expand = (l, r) => {
    for (; l >= 0 && r < n && s[l] === s[r]; --l, ++r) {
      can[l][r] = true;
    }
  };
  for (let i = 0; i < n; ++i) {
    expand(i, i);
    if (i + 1 < n) {
      expand(i, i + 1);
    }
  }

  // 遍历分割点
  for (let i = 1; i < n; ++i) {
    for (let j = i; j < n - 1; ++j) {
      if (can[i][j] && can[0][i - 1] && can[j + 1][n - 1]) {
        return true;
      }
    }
  }
  return false;
};

[
  'abcbdd',
  'bcbddxy',
].forEach(s => {
  console.log(checkPartitioning(s))
})