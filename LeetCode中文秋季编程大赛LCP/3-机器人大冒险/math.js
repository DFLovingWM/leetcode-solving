const COMMAND = {
  R: [1, 0],
  U: [0, 1]
}

/**
 * 将终点、障碍映射到一轮内
 * 
 * 时间：O(N), 80ms
 * 空间：主要是HashSet，O(N), 38MB
 */
var robot = function(commands, obstacles, endX, endY) {
  let [R, U] = [0, 0]
  for (let i = 0; i < commands.length; ++i) {
    if (commands[i] === 'R') {
      ++R
    } else {
      ++U
    }
  }

  // 记录在一轮中的路径经过的所有点
  const path = new Set()
  let [x, y] = [0, 0]
  path.add(getKey(x, y))
  for (const commandCode of commands) {
    const [xo, yo] = COMMAND[commandCode]
    x += xo
    y += yo
    path.add(getKey(x, y))
  }

  // 如果终点不在路线上，直接false
  [x, y] = transform(endX, endY, R, U)
  if (!path.has(getKey(x, y))) return false

  // 如果存在障碍在路线上，直接false
  for (let [x, y] of obstacles) {
    if (x > endX || y > endY || x === endX && y === endY) {
      continue // 大于终点的障碍不必考虑
    }
    [x, y] = transform(x, y, R, U)
    if (path.has(getKey(x, y))) return false
  }

  return true
};

// 将坐标转化为小范围内
function transform (x, y, xx, yy) {
  const base = Math.min(Math.floor(x / xx), Math.floor(y / yy))
  x -= base * xx
  y -= base * yy
  return [x, y]
}

// 坐标哈希
function getKey (x, y) {
  return `(${x}, ${y})`
}

// [
//   ['URR', [], 3, 2],
//   ['URR', [[2,2]], 3, 2],
//   ['URR', [[4, 2]], 3, 2],
// ].forEach(input => {
//   console.log(robot(...input))
// })