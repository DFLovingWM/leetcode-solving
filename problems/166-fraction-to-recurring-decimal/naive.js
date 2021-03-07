/**
 * 模拟除法
 */
var fractionToDecimal = function(remainder, divisor) {
  // 负数
  const isNegative = (remainder < 0 && divisor > 0 || remainder > 0 && divisor < 0);
  if (isNegative) {
    remainder = Math.abs(remainder);
    divisor = Math.abs(divisor);
  }

  // 整数部分
  const integer = String(Math.floor(remainder / divisor));
  remainder %= divisor;

  // 小数部分
  let decimal = '';
  if (remainder) {
    decimal += '.';
    const remainderMap = new Map(); // 记录出现过的「余数」，用以判断循环
    while (remainder) {
      // 出现循环
      if (remainderMap.has(remainder)) {
        const i = remainderMap.get(remainder);
        decimal = `${decimal.slice(0, i)}(${decimal.slice(i)})`
        break;
      }
      remainderMap.set(remainder, decimal.length);
      remainder *= 10;
      decimal += Math.floor(remainder / divisor);
      remainder %= divisor;
    }
  }

  return `${isNegative ? '-' : ''}${integer}${decimal}`;
};

[
  // [1,2],
  // [2,1],
  // [2,3],
  // [4,333],
  // [1,5],
  // [1,333],
  // [1,17],
  [-50, 8],
].forEach(([a, b]) => {
  console.log(fractionToDecimal(a, b), a / b)
})