/**
 * DP
 */
var numberOfSets = function(N, K) {
  const memo = new Map();
  const mod = 1e9 + 7;

  function helper(i, k, m) {
    // 注意：这里一定要走到最后
    // 否则答案会包含重复（从而变多）
    if (i === N - 1) {
      if (k === K) return 1;
      return 0;
    }
    // 提前失败
    if (k > K) {
      return 0;
    }

    const key = `${i}|${k}|${m}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    let res = 0;
    const add = x => {
      res += x;
      res %= mod;
    };
    // 不填
    add(helper(i + 1, k, 0));
    if (m) {
      // 同颜色
      add(helper(i + 1, k, 1));
      // 换一个颜色
      add(helper(i + 1, k + 1, 1));
    } else {
      add(helper(i + 1, k + 1, 1));
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0, 0);
};

console.log(numberOfSets(30, 7), 796297179);