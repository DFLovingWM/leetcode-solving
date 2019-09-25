const rand3 = require('./rand3')

// 先通过【平方倍】实现rand9
function rand9 () {
  return (rand3() - 1) * 3 // 稀疏区间
    + rand3() // 区间内偏移量
}

// 再使用rand9，回头实现rand7
module.exports = function rand7 () {
  while (true) {
    let res = rand9()
    if (res <= 7) return res
  }
}
