/**
 * 求AB、CD的两数之和
 * 
 * 时间：O(N^2), 136ms
 */
var fourSumCount = function (A, B, C, D) {
  const ab = new Map()
  for (const a of A) {
    for (const b of B) {
      ab.set(a + b, (ab.get(a + b) || 0) + 1)
    }
  }

  let res = 0
  for (const c of C) {
    for (const d of D) {
      if (ab.has(0 - c - d)) {
        res += ab.get(0 - c - d)
      }
    }
  }
  return res
};

[
  [
    [1, 2],
    [-2, -1],
    [-1, 2],
    [0, 2],
  ],
].forEach(input => {
  console.log(fourSumCount(...input))
})