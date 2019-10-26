/**
 * 固定一点，按斜率归类
 */
var maxPoints = function(points) {
  const length = points.length
  if (length <= 2) return length

  let res = -Infinity
  for (let i = 0; i < length; ++i) {
    res = Math.max(res, fixAndCount(points, i))
  }
  return res
};

function fixAndCount (points, i) {
  const [x0, y0] = points[i]
  const count = new Map()
  let dup = 0

  for (let j = 0; j < points.length; ++j) {
    const [x, y] = points[j]
    if (x === x0 && y === y0) { // 重合点
      ++dup
      continue
    }
    let [dx, dy] = [x - x0, y - y0]
    let key
    if (dx === 0) { // 无穷
      key = 'Infinity'
    } else { // 一般情况：不直接用斜率做key，因为会丢失斜率
      const gcd = getGCD(Math.abs(dy), Math.abs(dx))
      dx /= gcd
      dy /= gcd
      key = `${dy}/${dx}`
    }
    if (!count.has(key)) count.set(key, 0)
    count.set(key, count.get(key) + 1)
  }

  return (count.size > 0 ? Math.max(...count.values()) : 0) + dup
}

// 求最大公约数
function getGCD (x, y) {
  if (y === 0) return x
  return getGCD(y, x % y)
}

// [
//   [[1,1],[2,2],[3,3]],
//   [[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]],
//   [[1,1],[2,2],[1,1],[2,2]],
//   [[0,0],[94911151,94911150],[94911152,94911151]],
//   [],
//   [[1.12121, 1]],
//   [[1,1],[1,1],[1,1]],
// ].forEach(points => {
//   console.log(maxPoints(points))
// })