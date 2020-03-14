/**
 * 哈希 + 模拟
 */
var sortString = function(s) {
  const freq = new Map();
  for (const ch of s) {
    freq.set(ch, (freq.get(ch) || 0) + 1);
  }

  let res = '';
  while (res.length < s.length) {
    for (let i = 0; i < 26 && res.length < s.length; ++i) { // 每次取最小字符
      const ch = String.fromCharCode(i + 'a'.charCodeAt(0));
      if (freq.has(ch) && freq.get(ch) > 0) {
        res += ch;
        freq.set(ch, freq.get(ch) - 1);
      }
    }

    for (let i = 25; i >= 0 && res.length < s.length; --i) { // 每次取最大字符
      const ch = String.fromCharCode(i +'a'.charCodeAt(0));
      if (freq.has(ch) && freq.get(ch) > 0) {
        res += ch;
        freq.set(ch, freq.get(ch) - 1);
      }
    }
  }
  return res;
};