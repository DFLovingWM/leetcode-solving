/**
 * 数学：每一位都放正确的数
 * 时间：O(N^2), 72ms
 */
var getPermutation = function(N, K) {
  // K从1开始，减1后表示「答案左边的排列数」
  --K;

  // count[i]表示i位的排列数
  const count = Array.from({ length: N + 1 }, () => 0);
  count[1] = 1;
  for (let i = 2; i <= N; ++i) {
    count[i] = count[i - 1] * i;
  }

  let res = '';
  const set = new Set(); // 已经用过的数字

  for (let i = 0; i < N; ++i) { // i：表示从高到低第i位
    let acc = 0;
    const d = count[N - i - 1];
    for (let j = 1; j <= N; ++j) { // j：表示逐个数字尝试
      if (set.has(j)) {
        continue;
      }

      // 如果K满足范围，则第`i`位就放这个`j`
      if (K >= acc && (d === 0 || K < acc + d)) {
        set.add(j);
        res += j;
        K -= acc;
        break;
      }

      acc += d;
    }
  }

  return res;
};

module.exports = getPermutation;
