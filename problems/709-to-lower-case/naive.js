/**
 * 实现String.prototype.toLowerCase
 * 
 * 时间：`O(N)`, 68ms
 */
var toLowerCase = function(str) {
  // return str.toLowerCase();

  let res = '';
  for (const ch of str) {
    if (ch >= 'A' && ch <= 'Z') { // 如果是大写字母，就转换
      res += String.fromCharCode(ch.charCodeAt(0) + 32); // A-65、a-97，ASCII相差32
    } else {
      res += ch;
    }
  }
  return res;
};