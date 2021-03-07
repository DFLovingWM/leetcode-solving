/**
 * 位运算
 * 
 * 时间：O(12 * 60 * 32) ~= O(1), 68ms
 */
var readBinaryWatch = function(N) {
  const res = [];
  for (let minute = 0; minute <= 11; ++minute) {
    for (let second = 0; second <= 59; ++second) {
      if (countOneInBinary(minute) + countOneInBinary(second) === N) {
        res.push(toStr(minute, second));
      }
    }
  }
  return res;
};

function countOneInBinary(x) {
  let res = 0;
  for (; x; x >>>= 1) {
    if (x & 1) ++res;
  }
  return res;
}

function toStr(minute, second) {
  return `${minute}:${String(second).padStart(2, '0')}`;
}
