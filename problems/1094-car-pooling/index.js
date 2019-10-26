/**
 * 模型构建：数组代表位置
 * 只要任意一个格子的sum大于capacity，就返回false
 * 
 * - 时间复杂度：`O(N2)`，72ms
 */
var carPooling = function(trips, capacity) {
  let length = trips.reduce((len, item) => Math.max(len, item[2]), 0)
  let pos = Array.from({ length }, () => 0)

  for (const [count, from, to] of trips) {
    for (let i = from; i < to; ++i) { // to是下车了，不算人数，所以是开区间
      pos[i] += count
      if (pos[i] > capacity) {
        return false
      }
    }
  }

  return true
};

[
  [[[2,1,5],[3,3,7]], 4],
  [[[2,1,5],[3,3,7]], 5],
  [[[2,1,5],[3,5,7]], 3],
  [[[3,2,7],[3,7,9],[8,3,9]], 11],
].forEach(input => {
  console.log(carPooling(...input))
})
