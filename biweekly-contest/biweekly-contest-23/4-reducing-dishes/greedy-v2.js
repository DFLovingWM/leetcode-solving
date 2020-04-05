/**
 * 贪心：从0开始，加菜（后缀数组优化）
 * 
 * 时间：O(NlogN), 80ms
 */
var maxSatisfaction = function (sat) {
  // 降序，即从最大值开始加
  sat.sort((a, b) => b - a);

  let curr = 0; // 记录当前结果，默认值为0(厨师罢工)
  let prefix = 0; // 记录当前前缀和

  for (let i = 0; i < sat.length; ++i) {
    // 所有系数加1，相当于加了一次prefix；最后加上新元素
    const next = curr + prefix + sat[i];
    // 记录最大结果
    curr = Math.max(curr, next);
    // prefix更新
    prefix += sat[i];
  }

  return curr;
};

module.exports = maxSatisfaction;