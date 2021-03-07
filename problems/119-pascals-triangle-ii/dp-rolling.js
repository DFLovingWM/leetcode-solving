/**
 * DP + 滚动数组
 * 时间：O(N^2)
 * 空间：O(K)
 */
var getRow = function(k) {
  // 第0行
  let prevs = [1];
  // 从第1行开始
  for (let r = 1; r <= k; ++r) {
    const currs = [];
    for (let c = 0; c <= r; ++c) {
      if (c === 0 || c === r) { // 这一行的头尾都是1
        currs.push(1);
      } else { // 其余/一般情况，相加
        currs.push(prevs[c] + prevs[c - 1]);
      }
    }
    prevs = currs;
  }
  return prevs;
};

module.exports = getRow;
