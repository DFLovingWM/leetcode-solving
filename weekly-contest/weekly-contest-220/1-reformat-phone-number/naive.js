/**
 * 模拟
 */
var reformatNumber = function(number) {
  const s = number.replace(/[- ]/g, '');
  let res = [];
  let i;
  for (i = 0; i < s.length - 4; i += 3) {
    res.push(s.slice(i, i + 3));
  }
  const rest = s.length - i;
  if (rest === 2 || rest === 3) {
    res.push(s.slice(i));
  } else if (rest === 4) {
    res.push(s.slice(i, i + 2));
    res.push(s.slice(i + 2));
  }
  return res.join('-');
};
