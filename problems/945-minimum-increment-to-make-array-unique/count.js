/**
 * 计算频次
 * 
 * 时间：O(N), 92ms
 */
var minIncrementForUnique = function (arr) {
  if (!arr.length) return 0

  // 最小、最大值，明确数字范围
  let [min, max] = [Infinity, -Infinity]
  for (const n of arr) {
    min = Math.min(min, n)
    max = Math.max(max, n)
  }

  // 计算：数字 => 频次
  const freq = new Array(max + 1).fill(0)
  for (const n of arr) {
    ++freq[n]
  }

  let res = 0
  let avail = -1

  for (let i = min; i <= max; ++i) {
    while (freq[i] > 1) { // 有重复
      // 寻找下一个空闲数字（从 i+1 开始找）
      avail = Math.max(avail, i + 1)
      while (avail <= max && freq[avail] > 0) ++avail

      // 累加步数
      res += avail - i

      ++avail // 空闲数字被使用了，下次要往后找
      --freq[i]
    }
  }

  return res
};

[
  // [1,2,2],
  [3,2,1,2,1,7],
  // [0,2,2],
].forEach(arr => {
  console.log(minIncrementForUnique(arr))
})