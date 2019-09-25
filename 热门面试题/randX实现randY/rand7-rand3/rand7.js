/**
 * 给定函数：等概率生成1~7
 */
module.exports = function rand7 () {
  return Math.floor(Math.random() * 7) + 1
}
