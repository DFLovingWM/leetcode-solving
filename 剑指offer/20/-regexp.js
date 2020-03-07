/**
 * 正则
 */
var isNumber = function (s) {
  s = s.trim();
  const re = /^[\+\-]?(\d+)?(\.\d*)?$/; // 基数部分
  const expRE = /^[\+\-]?\d+$/; // 指数部分
  let i = 0;
  while (i < s.length && s[i].toLowerCase() !== 'e') ++i;
  if (i < s.length) {
    const a = s.slice(0, i);
    const exp = s.slice(i + 1);
    return a && exp && re.test(a) && expRE.test(exp);
  }
  return s && re.test(s);
};