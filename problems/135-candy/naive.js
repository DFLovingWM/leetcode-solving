/**
 * 暴力：不断检测、调整整个数组
 * 
 * 时间：O(N^2)
 * 空间：O(N)
 */
var candy = function(ratings) {
  const length = ratings.length
  const candies = Array.from({ length }, () => 1)
  let done = false

  while (!done) {
    done = true

    for (let i = 0; i < length; ++i) { // 对于每一个学生
      if (i + 1 < length && ratings[i] > ratings[i + 1] && candies[i] <= candies[i + 1]) { // 检测右边
        candies[i] = candies[i + 1] + 1
        done = false
      }
      if (i - 1 >= 0 && ratings[i] > ratings[i - 1] && candies[i] <= candies[i - 1]) { // 检测左边
        candies[i] = candies[i - 1] + 1
        done = false
      }
    }
  }

  return candies.reduce((a, b) => a + b, 0)
};

[
  [1,0,2],
  [1,2,2],
].forEach(ratings => {
  console.log(candy(ratings))
})