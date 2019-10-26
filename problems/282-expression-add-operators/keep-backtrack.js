/**
 * 维护当前值：
 * 枚举表达式的同时eval当前表达式，这样能够快速判断
 * 参考：https://leetcode.com/problems/expression-add-operators/discuss/71895/Java-Standard-Backtrace-AC-Solutoin-short-and-clear
 * 
 * 时间：124ms
 */
var addOperators = function (text, target) {
  const res = []

  /**
   * 递归函数
   * @param {number} from 从from位置开始（即下一个探索对应text[from]字符）
   * @param {string} currExp 当前表达式
   * @param {number} currValue 当前表达式的结果
   * @param {number} prev 上一个操作数(带符号)，恢复用
   */
  function backtrack (from, currExp, currValue, prev) {
    if (from === text.length) {
      if (currValue === target) {
        res.push(currExp)
      }
      return
    }
    
    for (let end = from + 1; end <= text.length; ++end) { // 截取多长作为本次的数字
      const num = Number(text.slice(from, end))
      
      if (from === 0) { // 初始情况，只有加法（也可以把这段代码拎到外面）
        backtrack(end, currExp + num, currValue + num, num)
      } else { // 一般情况
        backtrack(end, currExp + '+' + num, currValue + num, num) // 加
        backtrack(end, currExp + '-' + num, currValue - num, -num) // 减
        backtrack(end, currExp + '*' + num, currValue - prev + prev * num, prev * num) // 乘
      }
      
      if (text[from] === '0') {
        // 如果是0开头，只能截取0，不能再截取更多了
        break
      }
    }
  }

  backtrack(0, '', 0, 0)
  return res
};

module.exports = addOperators