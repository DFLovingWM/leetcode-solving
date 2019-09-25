// 只能向上、向右走
const COMMAND = {
  U: [0, 1],
  R: [1, 0]
}

var robot = function(commands, obstacles, endX, endY) {
  const obstacleSet = new Set()
  for (const [x, y] of obstacles) {
    obstacleSet.add(getKey(x, y))
  }
  return dfs(0, 0, commands, 0, obstacleSet, endX, endY)
};

function getKey (x, y) {
  return `${x},${y}`
}

function dfs (x, y, commands, commandIndex, obstacleSet, targetX, targetY) {
  if (x === targetX && y === targetY) return true // 到达终点
  if (obstacleSet.has(getKey(x, y))) return false // 撞树上了
  if (y > targetY || x > targetX) return false // 永远无法到达终点
  
  const [xx, yy] = COMMAND[commands[commandIndex]]
  const [nextX, nextY] = [x + xx, y + yy]
  return dfs(nextX, nextY, commands, (commandIndex + 1) % commands.length, obstacleSet, targetX, targetY)
}

[
  ['URR', [], 300000, 200000],
  ['URR', [[2,2]], 3, 2],
  ['URR', [[4,2]], 3, 2],
  ['URR', [], 1, 2],
].forEach(input => {
  console.log(robot(...input))
})