/**
 * 数据量小，回溯
 */
var maxUniqueSplit = function(s) {
  const n = s.length;
  let res = 1;

  function helper(i, set = new Set()) {
    if (i === n) {
      res = Math.max(res, set.size);
      return;
    }

    let acc = '';
    for (let j = i; j < n; ++j) {
      acc += s[j];
      if (!set.has(acc)) {
        const nextSet = new Set(set);
        nextSet.add(acc);
        helper(j + 1, nextSet);
      }
    }
  }

  helper(0);
  return res;
};