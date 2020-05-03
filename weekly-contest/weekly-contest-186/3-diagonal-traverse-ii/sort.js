/**
 * 排序：按照曼哈顿距离
 * 
 * 时间：O(NlogN), 780ms
 */
var findDiagonalOrder = function(nums) {
  const positions = [];
  for (let i = 0; i < nums.length; ++i) {
    for (let j = 0; j < nums[i].length; ++j) {
      positions.push([i, j]);
    }
  }
  positions.sort((A, B) => {
    const a = A[0] + A[1];
    const b = B[0] + B[1];
    if (a !== b) return a - b; // 曼哈顿距离越小，越优先
    return A[1] - B[1]; // 列索引越小，越优先
  });
  return positions.map(p => nums[p[0]][p[1]]);
};

[
  [[1,2,3],[4,5,6],[7,8,9]],
  [[1,2,3,4,5],[6,7],[8],[9,10,11],[12,13,14,15,16]],
  [[1,2,3],[4],[5,6,7],[8],[9,10,11]],
  [[1,2,3,4,5,6]],
].forEach(A => {
  console.log(findDiagonalOrder(A));
});