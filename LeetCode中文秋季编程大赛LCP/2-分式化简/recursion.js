const Fraction = require('./Fraction')

/**
 * 顺序算，递归
 * 
 * 时间：O(N), 64ms
 */
var fraction = function(cont) {
  return helper(cont, 0).toArray()
};

function helper (cont, i) {
  if (i === cont.length - 1) {
    return new Fraction(cont[i])
  }
  const back = helper(cont, i + 1)
  return new Fraction(cont[i]).add(back.reverse())
}

[
  [3, 2, 0, 2]
].forEach(input => {
  console.log(fraction(input))
})