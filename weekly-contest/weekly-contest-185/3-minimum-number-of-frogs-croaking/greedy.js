/**
 * 贪心, 'croak'
 */

const PREV = {
  r: 'c',
  o: 'cr',
  a: 'cro',
  k: 'croa'
}

var minNumberOfFrogs = function(s) {
  const freq = new Map();
  let res = 0;

  for (const ch of s) {
    if (ch === 'c') {
      freq.set(ch, (freq.get(ch) || 0) + 1);
    } else {
      const prev = PREV[ch];
      // 找不到合法前缀
      if (!freq.has(prev) || freq.get(prev) === 0) return -1;

      // 减1
      freq.set(prev, freq.get(prev) - 1);
      if (freq.get(prev) === 0) freq.delete(prev);
      // 加1
      if (ch !== 'k') { // 完整的叫声算一只青蛙，可以重用，就不需要加1
        const curr = prev + ch;
        freq.set(curr, (freq.get(curr) || 0) + 1);
      }
    }

    // 计算当前这一步所需最小青蛙数
    let n = 0;
    for (const [k, v] of freq) {
      n += v;
    }
    res = Math.max(res, n);
  }

  if (freq.size === 0) return res; // 合法
  return -1;
};

[
  "croakcroak",
  "crcoakroak",
  "croakcrook",
  "croakcroa",
  "crocakcroraoakk",
  "cccrrocarkooraakkoak",
].forEach(s => {
  console.log(minNumberOfFrogs(s));
})