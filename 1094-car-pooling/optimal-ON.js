/**
 * 同样是数组模拟，可以优化到 `O(N)`，耗时：56ms
 * 参考：https://leetcode.com/problems/car-pooling/discuss/317611/C%2B%2B-O(n)-One-Thousand-and-One-Stops
 */
var carPooling = function(trips, capacity) {
  let length = trips.reduce((len, item) => Math.max(len, item[2]), 0) + 1
  let pos = Array.from({ length }, () => 0)

  for (const [count, from, to] of trips) {
    pos[from] += count // 上车
    pos[to] -= count // 下车
  }

  // 从头到尾遍历一遍（模拟），看座位够不够
  for (let i = 0; i < length; ++i) {
    capacity -= pos[i]
    if (capacity < 0) {
      return false
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
