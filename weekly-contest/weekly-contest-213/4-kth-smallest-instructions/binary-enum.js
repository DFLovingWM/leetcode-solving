/**
 * 枚举二进制状态
 */
var kthSmallestPath = function(destination, K) {
  const [a, b] = destination;
  const n = a + b;
  const upperbound = 1 << n;
  let k = 0;
  for (let i = 0; i < upperbound; ++i) {
    if (check(i, a)) {
      ++k;
      if (k === K) {
        return getString(i, n);
      }
    }
  }
};

function check(x, targetOneCount) {
  let count = 0;
  while (x) {
    if (x & 1) ++count;
    x >>>= 1;
  }
  return count === targetOneCount;
}

function getString(x, n) {
  const arr = [];
  while (x) {
    if (x & 1) {
      arr.push('V');
    } else {
      arr.push('H');
    }
    x >>>= 1;
  }
  while (arr.length < n) {
    arr.push('H');
  }
  return arr.reverse().join('');
}

console.log(kthSmallestPath([15,15], 155117520));