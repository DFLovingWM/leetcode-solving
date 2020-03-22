/**
 * KMP
 * 
 * 时间：O(N), 88ms
 * 空间：O(N), 45.3MB
 */
var longestPrefix = function(s) {
  const next = getNext(s);
  const n = s.length;
  return s.slice(0, next[n - 1]);
};

// 求KMP的next数组
function getNext(s) {
  const n = s.length;
  const next = new Array(n);
  next[0] = 0;

  let j = 0;
  for (let i = 1; i < n; ++i) {
    // 先让j回退、直到相等或j到了开头
    while (s[i] !== s[j] && j > 0) {
      j = next[j - 1];
    }
    // 再看是否相等
    if (s[i] === s[j]) {
      next[i] = j + 1;
      ++j;
    } else {
      next[i] = 0;
    }
  }

  return next;
}