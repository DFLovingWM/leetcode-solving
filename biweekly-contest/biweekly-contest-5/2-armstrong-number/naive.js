/**
 * 直接判断
 */
var isArmstrong = function (N) {
  let d = 0 // 位数
  for (let n = N; n; n = Math.floor(n / 10)) ++d

  let sum = 0
  for (let n = N; n; n = Math.floor(n / 10)) {
    sum += Math.pow(n % 10, d)
    if (sum > N) return false
  }
  return sum === N
};

[
  153,
  123,
].forEach(N => {
  console.log(isArmstrong(N))
})