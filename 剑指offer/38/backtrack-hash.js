/**
 * 回溯 + 哈希去重
 */
var permutation = function (s) {
  const set = new Set();
  
  function backtrack(str, acc) {
    if (!str) {
      set.add(acc);
      return;
    }

    for (let i = 0; i < str.length; ++i) {
      backtrack(str.slice(0, i).concat(str.slice(i + 1)), acc.concat(str[i]));
    }
  }

  backtrack(s, '');
  return Array.from(set);
};