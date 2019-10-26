/**
 * 最大值最小化：(在整数范围内)二分枚举吃速
 * 
 * 时间：O(NlogX)
 */
var minEatingSpeed = function (piles, H) {
  const max = piles.reduce((a, b) => Math.max(a, b), -Infinity)
  let left = 1
  let right = max + 1

  while (left < right) {
    const mid = left + (right - left >> 1)

    if (check(piles, mid, H)) { // 能满足，那就再吃慢一点（探索更优解）
      right = mid
    } else { // 不满足，只能吃快一点
      left = mid + 1
    }
  }

  return left
};

function check (piles, speed, H) {
  let h = 0
  for (const pile of piles) {
    h += Math.ceil(pile / speed)
  }
  return h <= H // 在H小时内吃完
}

[
  [[3,6,7,11], 8],
  [[30,11,23,4,20], 5],
  [[30,11,23,4,20], 6],
].forEach(input => {
  console.log(minEatingSpeed(...input))
})