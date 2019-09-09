/**
 * 题目要求原地修改，那么可以从尾部开始比较
 * 
 * 时间：O(N + M), 80ms
 * 空间：O(1), 33.9MB
 */
var merge = function(A, aLength, B, bLength) {
  let rest = aLength + bLength
  let [a, b] = [aLength - 1, bLength - 1]

  while (rest > 0) {
    // 注意这里 if...else... 的设置，要写得优雅一些
    if (
      (a >= 0 && b >= 0 && A[a] > B[b]) || // 如果A元素大于B元素
      (a >= 0 && b < 0) // 或者B没有元素了
    ) {
      A[--rest] = A[a]
      --a
    } else {
      A[--rest] = B[b]
      --b
    }
  }
};