/**
 * 两数只和问题
 * 用Map记录频次（哈希）
 */
var maxOperations = function(nums, sum) {
  const freq = new Map();
  let res = 0;
  for (const num of nums) {
    const ano = sum - num;
    const anoFreq = freq.get(ano) || 0;
    if (anoFreq > 0) {
      ++res;
      freq.set(ano, anoFreq - 1);
    } else {
      freq.set(num, (freq.get(num) || 0) + 1);
    }
  }
  return res;
};