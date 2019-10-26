/**
 * 位操作：a^b是无进位加法，a&b找出进位
 * 
 * 时间：68ms
 */
var getSum = function (a, b) {
  let sum = a ^ b
  let carry = (a & b) << 1

  while (carry) { // sum和carry一直相加，直到carry为0
    a = sum
    b = carry
    sum = a ^ b
    carry = (a & b) << 1
  }

  return sum
};

[
  [1, 2],
  [10, 20],
  [-1, 2],
].forEach(input => {
  console.log(getSum(...input))
})