const rand7 = require('./rand7')

/**
 * 用rand7实现：生成1～3的随机数
 */
function rand3 () {
  while (true) {
    let res = rand7()
    if (res <= 6) {
      return res % 3 + 1
    }
  }
}

module.exports = rand3
