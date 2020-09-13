/**
 * 
 */
var calculate = function(s) {
  let [x, y] = [1, 0];
  for (const ch of s) {
    if (ch === 'A') {
      x = 2 * x + y;
    } else {
      y = 2 * y + x;
    }
  }
  return x + y;
};

