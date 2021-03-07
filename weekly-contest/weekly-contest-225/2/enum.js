/**
 * 枚举3种方案，每种方案都枚举26个字母
 * 
 * 时间：1468ms
 */
var minCharacters = function(a, b) {
  return Math.min(
    less(a, b),
    less(b, a),
    sameChar(a, b)
  );
};

// O(N)
function less(a, b) {
  let res = Infinity;

  // 暴力尝试26个字母，作为“分界线”
  for (let i = 1; i < 26; ++i) { // 'a'不需要看了，所以从'b'开始
    const pivot = String.fromCharCode(97 + i);

    let count = 0;
    for (const ch of a) {
      if (ch >= pivot) ++count;
    }
    for (const ch of b) {
      if (ch < pivot) ++count;
    }

    res = Math.min(res, count);
  }

  return res;
}

// O(N)
function sameChar(a, b) {
  let res = a.length + b.length;

  // 暴力尝试26个字母即可
  for (let i = 0; i < 26; ++i) {
    const pivot = String.fromCharCode(97 + i);

    let count = 0;
    for (const ch of a) {
      if (ch !== pivot) ++count;
    }
    for (const ch of b) {
      if (ch !== pivot) ++count;
    }

    res = Math.min(res, count);
  }

  return res;
}
