/**
 * 二进制：先找位数，再找偏移量
 */
var encode = function (num) {
  if (num === 0) {
    return ''
  }
  if (canSqrt2(num + 1)) {
    return '0'.repeat(Math.floor(Math.log2(num + 1)))
  }

  const base = Math.floor(Math.log2(num))
  const n = num - (1 << base) + 1
  return n.toString(2).padStart(base, '0')
};

function canSqrt2 (x) {
  const base = Math.log2(x)
  return Number.isInteger(base)
}

[
  0,
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  23,
  107,
].forEach(n => {
  console.log(n, encode(n))
})