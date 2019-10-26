/**
 * @param {number} N
 * @return {string}
 */
var baseNeg2 = function(N) {
  if (N === 0) return '0'

  let ret = []
  let residue
  while (N !== 0) {
    let tmp = N
    N = Math.ceil(N / -2) // Key!
    residue = tmp - N * (-2)
    ret.push(residue)
  }
  return ret.reverse().join('')
};

[
  2,
  3,
  4,
  7,
].forEach(n => {
  console.log(baseNeg2(n))
})