/**
 * 贪心
 */
var minRefuelStops = function (endPoint, remain, stations) {
  stations.sort((a, b) => a[0] - b[0])

  let farest = 0
  let lastFarest = -1
  let result = 0

  for (let i = 0; i < stations.length; ++i) {
    let left = stations[i][0]
    let right = stations[i][0] + stations[i][1]

    if (left - remain > farest) { // 剩余油量不能到达最近的加油站 => 直接失败
      return -1
    }
    
    if (left - remain > lastFarest) { // 新
      lastFarest = farest
      farest = Math.max(farest, right)
      ++result
    } else { // 旧
      farest = Math.max(farest, right)
    }

    if (farest + remain >= endPoint) { // 如果剩余的油可以到达终点，则可以返回了
      return result
    }
  }

  return farest + remain >= endPoint ? result : -1
};

[
  [1, 1, []],
  [100, 1, [10, 100]],
  [100, 10, [[10,60],[20,30],[30,30],[60,40]]],
].forEach(input => {
  console.log(minRefuelStops(...input))
})