/**
 * 先求和，再减去，剩下的元素就是缺失元素
 */
var missingNumber = function (arr) {
  const sum = (arr[0] + arr[arr.length - 1]) * (arr.length + 1) / 2 // 因为题目保证头尾不是缺失元素，所以可以放心用等差数列求和公式
  const currSum = arr.reduce((a, b) => a + b, 0) // 当前和
  return sum - currSum
};

module.exports = missingNumber