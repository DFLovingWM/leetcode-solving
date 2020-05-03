/**
 * DP：对每一顶帽子进行分配
 */
function numberWays(hats) {
  const MOD = 1e9 + 7;
  const n = hats.length;

  // 离散化帽子（压缩到下标0）
  const hatSet = new Set();
  for (const h of hats) {
    for (const i of h) {
      hatSet.add(i);
    }
  }
  const hatList = [...hatSet];
  const H = hatList.length;
  const hatCode = new Map();
  for (const [i, h] of hatList.entries()) {
    hatCode.set(h, i);
  }

  // 不够分
  if (H < n) return 0;

  // 建立反向映射
  const hat2Men = Array.from({ length: H }, () => []); // 帽子索引 => 人数组
  for (const [i, hat] of hats.entries()) {
    for (const h of hat) {
      hat2Men[hatCode.get(h)].push(i);
    }
  }
  const memo = new Map();

  // 当前在帽子hi、已分配情况为cover、已分配mi个人，最终的方案数
  // O(40 * 2^10 * 10) != O(400000)
  function helper(hi, cover, mi) {
    if (mi === n) return 1;

    const key = `${hi}#${cover}#${mi}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    // 策略1：尝试将hi分给每一个喜欢它的人
    for (const man of hat2Men[hi]) {
      if (!(cover & (1 << man))) { // 该人还没帽子，就能给他
        res += helper(hi + 1, cover | (1 << man), mi + 1);
        res %= MOD;
      }
    }
    // 策略2：抛弃hi这顶帽子，不分了
    if (H - 1 - hi >= n - mi) { // 如果剩余帽子还够分配
      res += helper(hi + 1, cover, mi);
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0, 0);
};

[
  [[3,4],[4,5],[5]],
  [[3,5,1],[3,5]],
  [[1,2,3,4],[1,2,3,4],[1,2,3,4],[1,2,3,4]],
  [[1,2,3],[2,3,5,6],[1,3,7,9],[1,8,9],[2,5,7]],
].forEach(A => {
  console.log(numberWays(A))
})