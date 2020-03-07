/**
 * 回溯
 * 
 * 时间：O(N), 68ms
 * 空间：O(N), 34.1MB
 */
var translateNum = function (num) {
  num = String(num);
  let res = 0;

  function dfs(i) {
    if (i === num.length) {
      ++res;
      return;
    }

    let n = Number(num[i]);
    // 一位
    dfs(i + 1);
    // 两位
    if (n !== 0 && i + 1 < num.length) {
      n = n * 10 + Number(num[i + 1]);
      if (n < 26) {
        dfs(i + 2);
      }
    }
  }

  dfs(0);
  return res;
};