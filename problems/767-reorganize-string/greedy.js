/**
 * 贪心：每次放频次最高、并且与上一个不同的字母
 * 因为频次会变化，所以需要用【堆】
 * 但是字母只有26个、可以看作常数，因此这里用暴力排序就好
 * 
 * 时间：O(N), 100ms
 */
var reorganizeString = function(S) {
  const freq = new Map();
  for (const ch of S) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }
  
  const letters = Array.from(freq.keys()); // length <= 26
  let res = '';
  let n = S.length;
  while (n--) {
    // 频次从高到低
    letters.sort((a, b) => {
      const af = freq.get(a) || 0;
      const bf = freq.get(b) || 0;
      return bf - af;
    });
    // 找第一个不冲突的字母
    let next;
    for (const letter of letters) {
      if ((freq.get(letter) || 0) > 0 &&
        (!res.length || res[res.length - 1] !== letter)) {
        next = letter;
        break;
      }
    }

    // 没法找到合法字母，则失败
    if (!next) return '';
    res += next;
    freq.set(next, freq.get(next) - 1);
  }
  return res;
};

[
  'aab',
  'aaab'
].forEach(s=> {
  console.log(reorganizeString(s))
})