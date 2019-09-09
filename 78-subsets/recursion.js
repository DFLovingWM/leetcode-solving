/**
 * backtrack解法
 * 时间：92ms
 * 空间：35.4MB
 */
var subsets = function(nums) {
  const results = []
  helper(nums, [], results)
  return results
};

function helper (nums, tmp, results) {
  // 注意：就算未到非叶子结点，也是一个子集
  results.push(tmp)

  for (let i = 0; i < nums.length; ++i) {
    const num = nums[i]

    helper(
      nums.slice(i + 1), // 注意这里，防止子集重复
      tmp.concat(num),
      results
    )
  }
}

[
  [1,2,3],
  [3,2,1],
].forEach(arr => {
  console.log(subsets(arr))
})