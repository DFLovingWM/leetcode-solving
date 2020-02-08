/**
 * 字符串处理：O(N)
 */
var defangIPaddr = function(address) {
  return Array.from(address).map(ch => {
    if (ch === '.') return '[.]';
    return ch;
  }).join('');
};