/**
 * 暴力
 * 
 * 时间：O(N^2 * L)
 */
var stringMatching = function(words) {
  const res = [];
  const n = words.length;
  for (let i = 0; i < n; ++i) {
    let ok = false;
    for (let j = 0; j < n; ++j) {
      if (i !== j && words[j].includes(words[i])) {
        ok = true;
        break;
      }
    }
    if (ok) {
      res.push(words[i]);
    }
  }
  return res;
};

[
  ["mass","as","hero","superhero"],
  ["leetcode","et","code"],
  ["blue","green","bu"],
].forEach(A => {
  console.log(stringMatching(A))
})