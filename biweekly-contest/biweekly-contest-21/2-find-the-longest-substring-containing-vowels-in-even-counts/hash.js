/**
 * 哈希表 + 前缀XOR
 * 
 * 时间：O(N), 156ms
 */
var findTheLongestSubstring = function(s) {
  const weight = {
    a: 0,
    e: 1,
    i: 2,
    o: 3,
    u: 4
  };

  const minIndex = new Map(); // 记录某个状态（二进制）的最小下标（以便找最大长度）
  minIndex.set(0, -1);
  let res = 0;
  let acc = 0;

  for (let i = 0; i < s.length; ++i) {
    const ch = s[i];

    if ('aeiou'.includes(ch)) {
      acc ^= 1 << weight[ch]; // XOR
    }

    if (minIndex.has(acc)) { // 如果该状态存在过 => XOR结果为0，即两个下标之间的线段是满足条件的
      res = Math.max(res, i - minIndex.get(acc));
    } else {
      minIndex.set(acc, i);
    }
  }

  return res;
};