/**
 * 最小化最大值问题
 * 
 * 时间：O(NlogN + NlogX), 112ms
 */
var minmaxGasDist = function (stations, K) {
  stations = stations.slice().sort((a, b) => a - b) // 排序：升序

  let maxDist = 0
  for (let i = 1; i < stations.length; ++i) {
    maxDist = Math.max(maxDist, stations[i] - stations[i - 1])
  }

  let left = 0
  let right = maxDist
  let mid

  while (right - left > 1e-6) {
    mid = (left + right) / 2

    if (check(stations, mid, K)) { // 满足，就找更小的
      right = mid
    } else {
      left = mid
    }
  }

  return mid
};

// 检查为了保持至少`maxDist`距离，建K个新加油站够不够
function check (stations, maxDist, K) {
  let need = 0
  for (let i = 1; i < stations.length; ++i) {
    const dist = stations[i] - stations[i - 1]
    if (dist % maxDist === 0) {
      need += dist / maxDist - 1
    } else {
      need += Math.floor(dist / maxDist)
    }
  }
  return need <= K
}

module.exports = minmaxGasDist