/**
 * 分数类
 */
class Fraction {
  constructor (numerator, denominator = 1) {
    this.numerator = numerator // 分子
    this.denominator = denominator // 分母
  }

  // 取倒数
  reverse () {
    return new Fraction(this.denominator, this.numerator)
  }

  // 分数相加
  add (B) {
    const d = lcm(this.denominator, B.denominator)
    const n = this.numerator * (d / this.denominator) + B.numerator * (d / B.denominator)
    const ratio = gcd(n, d)
    return new Fraction(n / ratio, d / ratio)
  }

  toArray () {
    return [this.numerator, this.denominator]
  }
}

function lcm (x, y) {
  return x * y / gcd(x, y)
}

function gcd (x, y) {
  return y === 0 ? x : gcd(y, x % y)
}

module.exports = Fraction