/**
 * 前缀和（容斥原理）
 * 
 * 时间：O(N^2)
 */
var kthLargestValue = function(matrix, k) {
  const [R, C] = [matrix.length, matrix[0].length];
  const prefix = Array.from({ length: R + 1 }, () => Array.from({ length: C + 1 }, () => 0));
  const arr = [];
  for (let r = 1; r <= R; ++r) {
    for (let c = 1; c <= C; ++c) {
      prefix[r][c] = matrix[r - 1][c - 1] ^ prefix[r - 1][c] ^ prefix[r][c - 1]
        ^ prefix[r - 1][c - 1];
      arr.push(prefix[r][c]);
    }
  }
  arr.sort((a, b) => b - a);
  return arr[k - 1];
};