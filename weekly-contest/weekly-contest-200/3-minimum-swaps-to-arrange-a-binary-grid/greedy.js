/**
 * 模拟
 * 
 * 时间：O(N^2), 120ms
 */
var minSwaps = function(grid) {
  // 记录每行右边有多少个连续的0
  const n = grid.length;
  const arr = Array.from({ length: n }, () => 0);
  for (let i = 0; i < n; ++i) {
    for (let j = n - 1; j >= 0 && grid[i][j] === 0; --j) {
      ++arr[i];
    }
  }

  let res = 0;
  for (let i = 0; i < n; ++i) {
    const need = n - 1 - i;

    // 从这一行开始，往下找
    let j;
    for (j = i; j < n; ++j) {
      // 找到第一个满足的就够了（贪心）
      if (arr[j] >= need) {
        res += j - i;
        break;
      }
    }

    // 找不到，直接失败
    if (j >= n) {
      return -1;
    }

    // 移动
    const del = arr.splice(j, 1)[0];
    arr.splice(i, 0, del);
  }
  return res;
};

[
  [[0,0,1],[1,1,0],[1,0,0]],
  [[0,1,1,0],[0,1,1,0],[0,1,1,0],[0,1,1,0]],
  [[1,0,0],[1,1,0],[1,1,1]],

].forEach(A => {
  console.log(minSwaps(A))
})