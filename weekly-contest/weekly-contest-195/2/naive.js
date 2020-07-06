/**
 * 哈希
 */
var canArrange = function(arr, K) {
  const hash = new Map();
  for (const n of arr) {
    const key = n % K;
    hash.set(key, (hash.get(key) || 0) + 1);
  }

  const ks = [...hash.keys()];
  for (const k1 of ks) {
    for (const k of [K, -K]) { // 正、负
      if (hash.get(k1) === 0) { // k1已经为0了，可以停下来了
        break;
      }

      const k2 = (k - k1) % k;
      if (!hash.has(k2)) { // 不存在k2，即该k无效，则看下一个k
        continue;
      }

      if (k2 === k1) { // 特殊情况
        hash.set(k1, hash.get(k1) % 2);
      } else {
        const d = Math.min(hash.get(k1), hash.get(k2));
        hash.set(k1, hash.get(k1) - d);
        hash.set(k2, hash.get(k2) - d);
      }
    }
  }
  return [...hash.values()].every(v => v === 0);
};

[
  [
    [1,2,3,4,5,10,6,7,8,9],
    5
  ],
  [
    [1,2,3,4,5,6],
    7
  ],
  [
    [1,2,3,4,5,6],
    10
  ],
  [
    [10,10],
    2
  ],
  [
    [-1,1,-2,2,-3,3,-4,4],
    3
  ]
].forEach(A => {
  console.log(canArrange(...A))
})