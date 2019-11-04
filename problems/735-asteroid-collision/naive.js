/**
 * 暴力模拟
 * 
 * 时间：远小于`O(N^2)`, 80ms
 */
var asteroidCollision = function (curr) {
  while (true) {
    let change = false
    let next = []

    for (let i = 0; i < curr.length; ) {
      if (i + 1 < curr.length && curr[i] > 0 && curr[i + 1] < 0) { // 碰撞
        change = true
        const [A, B] = [Math.abs(curr[i]), Math.abs(curr[i + 1])]
        if (A > B) {
          next.push(curr[i])
        } else if (A < B) {
          next.push(curr[i + 1])
        }
        i += 2
      } else {
        next.push(curr[i])
        i += 1
      }
    }

    if (!change) return next // 没有变化，可以结束了
    curr = next
  }
};

module.exports = asteroidCollision