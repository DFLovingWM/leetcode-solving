/**
 * 迭代法：对于每一个新加入的数字，它可以插入当前排列的任意位置
 * 参考：https://leetcode.com/problems/permutations/discuss/18237/My-AC-simple-iterative-javapython-solution
 * 
 * 时间：120ms
 * 空间：38MB
 */
var permute = function(nums) {
  let results = [[]] // 注意这里，一开始有个空集

  for (const num of nums) { // 对于新的每一个数字
    let nextResults = []
    for (const result of results) { // 遍历当前每一个（不完整的）排列
      for (let i = 0; i <= result.length; ++i) { // 新数字可以插入的位置（下标）
        nextResults.push([...result.slice(0, i), num, ...result.slice(i)])
      }
    }
    // 整个替换
    results = nextResults
  }

  return results
};

[
  [1,2,3],
  [1]
].forEach(arr => {
  console.log(permute(arr))
})
