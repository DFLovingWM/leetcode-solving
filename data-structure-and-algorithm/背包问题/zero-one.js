/**
 * 01背包：二维解法
 * f(i, j)：表示前 i 个物品中，容量为 j 的背包的最大价值
 * @param {Array<Array<Number>>} data N个物品的cost和value
 * @param {Number} volume 背包总容量
 */
function solve2 (data, volume) {
  let f = Array.from({ length: data.length + 1 }, _ => Array.from({ length: volume + 1 }, _ => 0)) // 初始化二维数组，每一位为0

  for (let i = 1; i <= data.length; ++i) { // 遍历每一个物品
    const [cost, value] = data[i - 1]

    for (let j = 0; j <= volume; ++j) {
      if (j < cost) { // 放不下
        f[i][j] = f[i - 1][j]
      } else { // 如果能放下
        f[i][j] = Math.max(
          f[i - 1][j], // 不放
          f[i - 1][j - cost] + value // 放
        )
      }
    }
  }

  return f[data.length][volume] // f[N][volume]最大值
}

/**
 * 01背包：一维解法
 * f(v)：表示容量为 v 的背包的最大价值
 * @param {Array<Array<Number>>} data 每个物品的cost和value
 * @param {Number} volume 背包总容量
 */
function solve1 (data, volume) {
  let f = Array.from({ length: volume + 1 }, _ => 0)

  for (let i = 1; i <= data.length; ++i) {
    const [cost, value] = data[i - 1]

    for (let v = volume; v >= cost; --v) {
      f[v] = Math.max(f[v], f[v - cost] + value)
    }
  }

  return f[volume]
}

module.exports = {
  solve2,
  solve1
}