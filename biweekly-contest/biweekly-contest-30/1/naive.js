/**
 * 字符串处理
 */
var reformatDate = function(date) {
  const [d, m, y] = date.split(' ');
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]
  const monthMapping = {};
  for (const [i, v] of months.entries()) {
    monthMapping[v] = padding(i + 1);
  }
  return [
    y,
    monthMapping[m],
    padding(d.slice(0, d.length - 2))
  ].join('-');
};

function padding(n) {
  return n < 10 ? `0${n}` : `${n}`;
}