/**
 * 有序地回溯
 * 时间：O(K), 2564ms
 */
var getPermutation = function(N, K) {
  let k = 0;
  let res;

  /**
   * 递归函数
   * @param {number} num 当前数字
   * @param {Set<number>} numSet num所含有的字符
   */
  function backtrack(num, numSet) {
    if (numSet.size === N) {
      ++k;
      if (k === K) {
        res = String(num);
      }
      return;
    }
    
    for (let i = 1; i <= N; ++i) {
      if (!numSet.has(i)) {
        // 探索
        numSet.add(i);
        backtrack(num * 10 + i, numSet);

        // 提前中止整个过程
        if (res) {
          return;
        }

        // 回溯
        numSet.delete(i);
      }
    }
  }

  backtrack(0, new Set());
  return res;
};

module.exports = getPermutation;
