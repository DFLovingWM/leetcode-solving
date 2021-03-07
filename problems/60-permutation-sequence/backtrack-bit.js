/**
 * 有序地回溯 + 位压缩优化
 * 时间：O(K), 488ms
 */
var getPermutation = function(N, K) {
  let k = 0;
  let res;

  /**
   * 递归函数
   * @param {number} num 当前数字
   * @param {number} cover num所含有的字符(二进制表示)
   * @param {number} count num的位数
   */
  function backtrack(num, cover, count) {
    if (count === N) {
      ++k;
      if (k === K) {
        res = String(num);
      }
      return;
    }
    
    for (let i = 1; i <= N; ++i) {
      if (!(cover & (1 << i))) {
        // 探索
        backtrack(num * 10 + i, cover ^ (1 << i), count + 1);

        // 提前中止整个过程
        if (res) {
          return;
        }

        // 回溯(immutable不需要逆操作)
      }
    }
  }

  backtrack(0, 0, 0);
  return res;
};

module.exports = getPermutation;
