/**
 * 直接算，相当于求等差数列的和
 * 
 * 时间：O(1)
 */
var minOperations = function(n) {
  // 个数
  const pairNum = Math.floor(n / 2);
  // 尾元素 An
  const tail = ((2 * n + 1) - (2 * 1 + 1)) / 2;
  // d = 2，求出头元素 A1
  const head = tail - (pairNum - 1) * 2;
  // Sn = (A1 + An) * n / 2;
  return (head + tail) * pairNum / 2;
};