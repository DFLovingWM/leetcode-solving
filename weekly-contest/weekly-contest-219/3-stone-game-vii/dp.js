/**
 * Top-down DP
 */
var stoneGameVII = function(stones) {
  // 前缀和（预处理）
  const p = [0];
  for (const stone of stones) {
    p.push(p[p.length - 1] + stone);
  }

  // DP
  const memo = new Map();

  function f(l, r, flag) {
    if (l > r) return 0;

    const key = `${l}|${r}|${flag}`;
    if (memo.has(key)) return memo.get(key);

    const pickHead = flag * (p[r + 1] - p[l + 1]) + f(l + 1, r, -flag);
    const pickTail = flag * (p[r] - p[l]) + f(l, r - 1, -flag);
    const res = flag === 1
      ? Math.max(pickHead, pickTail)  // Alice
      : Math.min(pickHead, pickTail); // Bob
    memo.set(key, res);
    return res;
  }

  return f(0, stones.length - 1, 1);
};