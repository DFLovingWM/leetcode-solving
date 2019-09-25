// 只能向上、向右走
const COMMAND = {
  U: [0, 1],
  R: [1, 0]
}

/**
 * 将终点、障碍映射到小范围内
 */
var robot = function(commands, obstacles, endX, endY) {
  const R = Array.from(commands).filter(ch => ch === 'R').length
  const U = commands.length - R

  // 处理障碍
  const obstacleSet = new Set()
  for (const [x, y] of obstacles) {
    if (x < endX && y < endY) {
      obstacleSet.add(getKey(x % R, y % U))
    }
  }
  // 处理终点
  endX %= R
  endY %= U

  // 开始遍历
  let [x, y] = [0, 0]
  let i = 0
  for (let i = 0; true; i = (i + 1) % commands.length) {
    const offset = COMMAND[commands[i]]
    const [xx, yy] = [x + offset[0], y + offset[1]]
    if (obstacleSet.has(getKey(xx, yy))) return false
    if (xx > endX || yy > endY) return false
    if (xx === endX && yy === endY) return true;
    [x, y] = [xx, yy]
  }
};

function getKey (x, y) {
  return `${x},${y}`
}

[
  ['URR', [], 1e9, 1e9],
  ['URR', [[2,2]], 3, 2],
  ['URR', [[4,2]], 3, 2],
  ['URR', [], 1, 2],
].forEach(input => {
  console.log(robot(...input))
})