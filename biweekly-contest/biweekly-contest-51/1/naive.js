/**
 * 模拟
 */
var replaceDigits = function(s) {
  let res = '';
  for (let i = 0; i < s.length; ++i) {
    if (i % 2 === 0) {
      res += s[i];
    } else {
      res += shift(s[i - 1], Number(s[i]));
    }
  }
  return res;
};

// 字符ASCII操作
function shift(ch, n) {
  return String.fromCharCode(ch.charCodeAt(0) + n);
}
