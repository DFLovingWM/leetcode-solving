/**
 * 二分查找 + 容斥原理
 * O(logX)
 */

const MAX_RESULT = 2 * Math.pow(10, 9)

var nthUglyNumber = function (K, a, b, c) {
  let left = 1
  let right = Math.min(MAX_RESULT, Math.max(a, b, c) * K) + 1

  while (left < right) {
    const middle = left + (right - left >> 1)

    // 求小于等于middle的丑数（middle前面有多少个丑数）
    const count = Math.floor(middle / a) + Math.floor(middle / b) + Math.floor(middle / c)
      - Math.floor(middle / lcm(a, b)) - Math.floor(middle / lcm(b, c)) - Math.floor(middle / lcm(a, c))
      + Math.floor(middle / lcm(lcm(a, b), c))

    if (count < K) {
      left = middle + 1
    } else {
      right = middle
    }
  }

  return left
};

// 求最大公约数
function gcd(x, y) {
  return y === 0 ? x : gcd(y, x % y)
}

// 求最小公倍数
function lcm(x, y) {
  return x * y / gcd(x, y)
}

[
  [5, 2, 3, 3],
  [3, 2, 3, 5],
  [4, 2, 3, 4],
  [5, 2, 11, 13],
  [100000000, 2, 217983653, 336916467],
  [1000000000, 2, 217983653, 336916467],
].forEach(input => {
  console.log(nthUglyNumber(...input))
})