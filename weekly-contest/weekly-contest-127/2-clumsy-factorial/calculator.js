/**
 * 简单版计算器：每次取一组来算
 */
var clumsy = function (N) {
  let res = 0
  let i = N
  let first = true

  while (i) {
    let [a, b, c, d] = [0, 1, 1, 0]
    if (i) a = i--
    if (i) b = i--
    if (i) c = i--
    if (i) d = i--
    
    if (first) {
      first = false
      res += Math.floor(a * b / c)
    } else {
      res -= Math.floor(a * b / c)
    }
    res += d
  }

  return res
};

[4, 10].forEach(n => {
  console.log(clumsy(n))
})