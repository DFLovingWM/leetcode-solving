/**
 * Top-down DP
 * 
 * 时间：O(N), 80ms
 * 空间：O(N), 34.1MB
 */
var translateNum = function (num) {
  num = String(num);
  const memo = new Map();

  function helper(i) {
    if (i === num.length) return 1;
    if (memo.has(i)) return memo.get(i);

    // 一位
    let res = helper(i + 1);
    // 两位
    if (i + 1 < num.length && num[i] !== '0' && Number(num.slice(i, i + 2)) < 26) {
      res += helper(i + 2);
    }
    memo.set(i, res);
    return res;
  }

  return helper(0);
};