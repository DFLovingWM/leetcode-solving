/**
 * @param {number} n
 * @return {number}
 */
var countVowelStrings = function(n) {
  const memo = new Map();

  // ch: 0~4
  function f(i, ch) {
    if (i === n) return 1;
    if (ch === 5) return 0;

    const key = `${i},${ch}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    for (let tmpCh = ch; tmpCh < 5; ++tmpCh) {
      res += f(i + 1, tmpCh);
    }
    memo.set(key, res);
    return res;
  }

  return f(0, 0);
};