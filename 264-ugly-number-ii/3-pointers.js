/**
 * 3指针：每次取min
 * 
 * 时间：O(N), 76ms
 * 空间：O(N)
 */
var nthUglyNumber = function (n) {
  const res = [1]
  let [a, b, c] = [0, 0, 0]

  for (let i = 1; i < n; ++i) {
    const [A, B, C] = [res[a] * 2, res[b] * 3, res[c] * 5]
    min = Math.min(A, B, C)
    res.push(min)

    if (min === A) ++a
    if (min === B) ++b
    if (min === C) ++c
  }

  return res[n - 1]
};

module.exports = nthUglyNumber