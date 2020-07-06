/**
 * NextSmaller问题，可以用单调栈
 * 
 * 时间：O(N), 80ms
 */
var finalPrices = function(prices) {
  const n = prices.length;
  const res = Array.from({ length: n }, (_, i) => prices[i]);
  res[n - 1] = prices[n - 1];
  const stack = [prices[n - 1]];
  for (let i = n - 2; i >= 0; --i) {
    while (stack.length > 0 && prices[i] < stack[stack.length - 1]) {
      stack.pop();
    }
    res[i] -= (stack.length > 0 ? stack[stack.length - 1] : 0);
    stack.push(prices[i]);
  }
  return res;
};

module.exports = finalPrices;