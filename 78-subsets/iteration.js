/**
 * 思路2: 循环
 */
var subsets = function(nums) {
  let curr = [[]] // 保存结果

  for (const n of nums) { // 挑选每一个数字
    const added = []

    for (const tmp of curr) { // 加入到当前所有子集中
      added.push(tmp.concat(n))
    }
    
    curr.push(...added) // 合并到结果中
  }

  return curr
};

module.exports = subsets