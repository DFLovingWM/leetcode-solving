var fraction = function(cont) {
  const res = cont.map(a => new Fraction(a)).reduceRight((after, before) => {
    return add(reverse(after), before)
  }, new Fraction(1, 0))
  return [res.a, res.b]
};

// 分数
function Fraction (a, b = 1) {
  this.a = a // 分子
  this.b = b // 分母
}

// 分数相加
function add (f1, f2) {
  const b = lcm(f1.b, f2.b)
  const a = f1.a * (b / f1.b) + f2.a * (b / f2.b)
  return new Fraction(a, b)
}

// 分数逆转
function reverse (f) {
  return new Fraction(f.b, f.a)
}

function lcm (x, y) {
  return x * y / gcd(x, y)
}

function gcd (x, y) {
  return y === 0 ? x : gcd(y, x % y)
}

[
  [3, 2, 0, 2],
  [0, 0, 3],
].forEach(input => {
  console.log(fraction(input))
})