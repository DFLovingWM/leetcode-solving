/**
 * 人生苦短，我用DP
 */
var videoStitching = function (clips, T) {
  // 挑选最好的区间
  const best = new Map()
  for (const [start, end] of clips) {
    if (!best.has(start) || end > best.get(start)) {
      best.set(start, end)
    }
  }

  // 按照开始时间排序
  const arr = []
  for (let i = 0; i <= 100; ++i) {
    if (best.has(i)) {
      arr.push([i, best.get(i)])
    }
  }

  const cache = new Map()

  function helper (i, prevEnd) {
    if (prevEnd >= T) return 0
    if (i === arr.length) return Infinity

    const key = `${i},${prevEnd}`
    if (cache.has(key)) return cache.get(key)

    let res = Infinity
    for (let j = i; j < arr.length; ++j) {
      if (arr[j][0] <= prevEnd && arr[j][1] > prevEnd) { // 如果能拼接(有效)、并且延伸得更长(更优)
        res = Math.min(res, 1 + helper(j + 1, arr[j][1])) // 就能选这第`j`个
      }
    }
    cache.set(key, res)
    return res
  }

  let res = helper(0, 0)
  if (res === Infinity) res = -1
  return res
};

[
  [[[0,2],[4,6],[8,10],[1,9],[1,5],[5,9]], 10],
  [[[0,1],[1,2]], 5],
  [[[0,1],[6,8],[0,2],[5,6],[0,4],[0,3],[6,7],[1,3],[4,7],[1,4],[2,5],[2,6],[3,4],[4,5],[5,7],[6,9]], 9],
  [[[0,4],[2,8]], 5],
  [[[0,5],[6,8]], 7],
].forEach(input => {
  console.log(videoStitching(...input))
})