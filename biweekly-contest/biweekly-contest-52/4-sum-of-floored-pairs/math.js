/**
 * 枚举倍数 + 区间计数
 * 时间：O(RlogR)
 */
var sumOfFlooredPairs = function(nums) {
  // 找min、max，确定数据范围
  let [min, max] = [Infinity, -Infinity];
  for (const num of nums) {
    min = Math.min(min, num);
    max = Math.max(max, num);
  }
  // 频次
  const freq = Array.from({ length: max + 1 }, () => 0);
  for (const num of nums) {
    ++freq[num];
  }
  // 频次的前缀和
  for (let i = min + 1; i <= max; ++i) {
    freq[i] += freq[i - 1];
  }

  const mod = 1e9 + 7;
  let res = 0;
  for (let x = min; x <= max; ++x) { // 除数
    const xCnt = freq[x] - freq[x - 1];

    // 仅仅为了快点
    if (xCnt === 0) {
      continue;
    }

    // 倍数：[x, 2x-1]、[2x, 3x-1]……
    for (let k = 1; true; ++k) {
      const [left, right] = [k * x, (k + 1) * x - 1];
      if (left > max) {
        break;
      }
      const yCnt = freq[Math.min(right, max)] - freq[left - 1];
      res += k * xCnt * yCnt;
      res %= mod;
    }
  }
  return res;
};
