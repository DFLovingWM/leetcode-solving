const Fraction = require('./Fraction')

/**
 * 从后面开始算
 * 
 * 时间：O(N), 56ms
 */
var fraction = function(cont) {
  return res = cont
    .map(n => new Fraction(n))
    .reduceRight(
      (B, A) => { // 从后面算起
        return A.add(B.reverse())
      },
      new Fraction(1, 0)
    )
    .toArray()
};
