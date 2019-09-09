/**
 * 迭代
 * 时间：O(2^N), 80ms
 * 空间：O(2^N), 35.1MB
 */
var subsets = function(nums) {
  let curSets = [[]] // 初始状态：只有一个空集
  for (const n of nums) { // 对于每一个新数字
    const newSets = [] // 存放这一轮增加的子集
    for (const curSet of curSets) {
      const newSet = curSet.concat(n) // 新子集
      newSets.push(newSet)
    }
    curSets = curSets.concat(newSets) // 添加新子集
  }
  return curSets
};

[
  [1,2,3],
  [1],
  [7,8],
].forEach(arr => {
  console.log(subsets(arr))
})