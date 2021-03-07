/**
 * 字符串，每次取一段解析
 */
var interpret = function(command) {
  let i = 0;
  const n = command.length;
  let res = '';
  while (i < n) {
    if (command[i] === 'G') {
      ++i;
      res += 'G';
    } else if (command.slice(i, i + 2) === '()') {
      i += 2;
      res += 'o';
    } else {
      i += 4;
      res += 'al';
    }
  }
  return res;
};