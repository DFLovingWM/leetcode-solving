/**
 * 大数相乘问题，模拟过程即可。可抽象出两个方法：
 * - mul(A, b)：大数乘小数
 * - add(A, B)：大数相加
 * 
 * 时间复杂度：O(A * B)
 */
var multiply = function(A, B) {
  if (A === '0' || B === '0') return '0'

  let result = '0'
  for (let i = B.length - 1; i >= 0; --i) {
    const tmp = mul(A, B[i]) + '0'.repeat(B.length - 1 - i)
    result = add(result, tmp)
  }
  return result
};

// O(A)
function mul (A, b) {
  let carry = 0
  let result = []
  for (let i = A.length - 1; i >= 0; --i) {
    const tmp = carry + Number(A[i]) * b
    carry = Math.floor(tmp / 10)
    result.push(tmp % 10)
  }
  if (carry) {
    result.push(carry)
  }
  return result.reverse().join('')
}

// O(max(A, B))
function add (A, B) {
  if (A.length < B.length) {
    [A, B] = [B, A];
  }
  A = Array.from(A).reverse()
  B = Array.from(B).reverse()

  let carry = 0
  let result = []
  let i
  for (i = 0; i < B.length; ++i) {
    const tmp = carry + Number(A[i]) + Number(B[i])
    carry = Math.floor(tmp / 10)
    result.push(tmp % 10)
  }
  for (; i < A.length; ++i) {
    const tmp = carry + Number(A[i])
    carry = Math.floor(tmp / 10)
    result.push(tmp % 10)
  }
  if (carry) {
    result.push(carry)
  }
  return result.reverse().join('')
}

[
  ['2', '3'],
  ['123', '456'],
].forEach(input => {
  console.log(multiply(...input))
})
