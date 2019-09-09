/**
 * 回溯 + 重复剪枝（基于排序）
 * 时间：92ms
 * 空间：36MB
 */
var subsetsWithDup = function(nums) {
  nums = nums.slice().sort((a, b) => a - b) // 非降序排序（为了让重复元素堆在一起，好去重）

  const results = []
  backtrack(nums, [], results)
  return results
};

function backtrack (nums, tmp, results) {
  results.push(tmp)

  for (let i = 0; i < nums.length; ++i) {
    // 剪枝：去重
    // 如果等于前一个元素，因为前一个元素已经遍历过，所以这个不用再遍历
    if (i > 0 && nums[i] === nums[i - 1]) {
      continue
    }

    backtrack(
      nums.slice(i + 1),
      tmp.concat(nums[i]),
      results
    )
  }
}

[
  [1,2,3],
  [3,2,1],
  [1,1,1]
].forEach(arr => {
  console.log(subsetsWithDup(arr))
})