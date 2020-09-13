/**
 * @param {number} n
 * @return {string}
 */
var thousandSeparator = function(n) {
  let res = [];
  n = String(n);
  let acc = 0;
  for (let i = n.length - 1; i >= 0; --i) {
    if (acc !== 0 && acc % 3 === 0) {
      res.push('.');
    }
    res.push(n[i]);
    ++acc;
  }
  return res.reverse().join('');
};