/**
 * 直接判断
 */
var checkPerfectNumber = function (num) {
  if (num <= 0) return false

  let sum = 0
  for (let i = 1; i * i <= num; ++i) { // 因子的上界：平方根
    if (num % i === 0) {
      if (i !== num) sum += i
      if (num / i !== num) sum += num / i
    }
  }
  return sum === num
};

[1, 28].forEach(n => {
  console.log(checkPerfectNumber(n))
})