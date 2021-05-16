/**
 * 模拟/字符串处理
 */
var sortSentence = function(s) {
  return s
    .split(' ')
    .map(e => [Number(e.slice(-1)), e.slice(0, e.length - 1)])
    .sort((a, b) => a[0] - b[0])
    .map(e => e[1])
    .join(' ');
};