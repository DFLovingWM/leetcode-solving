/**
 * Top-down DP
 * 
 * 时间：O(NM), 72ms
 * 空间：O(NM), 36.2MB
 */
var isMatch = function (text, pattern) {
  const memo = new Map();

  // DP函数：即将匹配`text[i]`与`pattern[j]`
  function helper(i, j) {
    if (j === pattern.length) return i === text.length;

    const key = i * pattern.length + j;
    if (memo.has(key)) return memo.get(key);

    const matchFirstChar = i < text.length && (text[i] === pattern[j] || pattern[j] === '.');
    let res = false;
    if (j + 1 < pattern.length && pattern[j + 1] === '*') { // 任意数量匹配符 => 匹配0/1个
      res = helper(i, j + 2) || // 匹配0个
        matchFirstChar && helper(i + 1, j); // 如果字符相等，可以匹配1个
    } else if (matchFirstChar) { // 单个匹配
      res = helper(i + 1, j + 1);
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0);
};