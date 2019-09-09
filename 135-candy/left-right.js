/**
 * 类似于最大栈，顺序逆序各维护一个分数数组
 * 
 * 时间：O(N)
 * 空间：O(N)
 */
var candy = function(ratings) {
  const length = ratings.length

  // 顺序：保证所有学生的左边合法
  const left = Array.from({ length }, () => 1)
  for (let i = 1; i < length; ++i) {
    if (ratings[i] > ratings[i - 1]) {
      left[i] = left[i - 1] + 1
    }
  }

  // 逆序：保证所有学生的右边合法
  const right = Array.from({ length }, () => 1)
  for (let i = length - 2; i >= 0; --i) {
    if (ratings[i] > ratings[i + 1]) {
      right[i] = right[i + 1] + 1
    }
  }

  // 二者取更大值，保证每个学生左右都合法
  const candies = Array.from({ length }, () => 1)
  for (let i = 0; i < length; ++i) {
    candies[i] = Math.max(left[i], right[i])
  }
  return candies.reduce((a, b) => a + b, 0)
};

[
  [1,0,2],
  [1,2,2],
].forEach(ratings => {
  console.log(candy(ratings))
})