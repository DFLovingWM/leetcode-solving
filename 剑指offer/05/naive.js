/**
 * 空格转义，简单的字符串处理
 */
var replaceSpace = function (s) {
  let res = '';
  for (const ch of s) {
    if (ch === ' ') {
      res += '%20';
    } else {
      res += ch;
    }
  }
  return res;
};