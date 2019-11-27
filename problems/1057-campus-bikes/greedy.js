/**
 * 求出所有组合pairs，排序，然后开始分配（需要记录已分配的工人与单车）
 * 
 * 时间：`O(NM * log(NM))`, 2200ms
 */
var assignBikes = function (workers, bikes) {
  const pairs = []
  for (let i = 0; i < workers.length; ++i) {
    for (let j = 0; j < bikes.length; ++j) {
      pairs.push([i, j, mahanttan(...workers[i], ...bikes[j])])
    }
  }

  // 距离升序、worker下标升序、bike下标升序
  pairs.sort((a, b) => a[2] - b[2] || a[0] - b[0] || a[1] - b[1])
  pairs.reverse()

  // 安排
  const res = new Array(workers.length).fill(-1)
  const isBikeUsed = new Set() // 记录单车是否已分配
  let cnt = 0

  while (cnt < workers.length) {
    const [i, j] = pairs.pop()
    if (isBikeUsed.has(j) || res[i] !== -1) continue

    res[i] = j // 将单车j分配给工人i
    isBikeUsed.add(j)
    ++cnt
  }

  return res
};

function mahanttan (x1, y1, x2, y2) {
  return Math.abs(x1 - x2) + Math.abs(y1 - y2)
}

[
  [[[0,0],[2,1]], [[1,2],[3,3]]],
  [[[0,0],[1,1],[2,0]], [[1,0],[2,2],[2,1]]],
].forEach(input => {
  console.log(assignBikes(...input))
})