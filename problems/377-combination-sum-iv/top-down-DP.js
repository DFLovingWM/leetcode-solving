/**
 * Top-down DP：记忆化搜索
 * 
 * 时间：76ms
 * 空间：36MB
 */
var combinationSum4 = function(nums, target) {
  const helper = getHelper(nums)
  return helper(target)
};

// 闭包。让递归函数能够全局访问`nums`和`HashMap`
function getHelper (nums) {
  const answers = new Map()
  answers.set(0, 1)

  return function helper (n) {
    if (answers.has(n)) return answers.get(n)

    let result = 0
    for (const num of nums) {
      if (n - num >= 0) {
        result += helper(n - num)
      }
    }
    answers.set(n, result)
    return result
  }
}

// [
//   [[1, 2, 3], 4],
//   [[4,2,1], 32],
// ].forEach(input => {
//   console.log(combinationSum4(...input))
// })