/**
 * 贪心模拟
 */
let isPrintable = function (mat) {
  const [m, n] = [mat.length, mat[0].length];

  const border = new Map(); // number => [top, right, bottom, left]
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      const x = mat[i][j];
      if (!border.has(x)) {
        border.set(x, [i, j, i, j]);
      } else {
        const A = border.get(x);
        A[0] = Math.min(A[0], i);
        A[1] = Math.max(A[1], j);
        A[2] = Math.max(A[2], i);
        A[3] = Math.min(A[3], j);
        border.set(x, A);
      }
    }
  }

  function getOccluded(num) {
    let res = 0;
    const A = border.get(num);
    for (let i = A[0]; i <= A[2]; ++i) {
      for (let j = A[3]; j <= A[1]; ++j) {
        if (mat[i][j] !== num) {
          ++res;
        }
      }
    }
    return res;
  }

  // 关键问题：以什么顺序遍历nums？
  // 被遮挡的越多、越先遍历
  const nums = Array.from(border.keys()).sort((a, b) => getOccluded(b) - getOccluded(a));
console.log(nums)
  const grid = Array.from({ length: m }, () => Array.from({ length: n }, () => 0));
  for (const num of nums) {
    const A = border.get(num);
    // 着色
    for (let i = A[0]; i <= A[2]; ++i) {
      for (let j = A[3]; j <= A[1]; ++j) {
        grid[i][j] = num;
      }
    }
  }

  // 检查（与终点mat对比）
  for (let i = 0; i < m; ++i) {
    for (let j = 0; j < n; ++j) {
      if (grid[i][j] !== mat[i][j]) {
        return false;
      }
    }
  }
  return true;
};

[
  // [
  //   [1, 1, 1, 1],
  //   [1, 2, 2, 1],
  //   [1, 2, 2, 1],
  //   [1, 1, 1, 1],
  // ],
  // [
  //   [1, 1, 1, 1],
  //   [1, 1, 3, 3],
  //   [1, 1, 3, 4],
  //   [5, 5, 1, 4],
  // ],
  // [
  //   [1, 2, 1],
  //   [2, 1, 2],
  //   [1, 2, 1],
  // ],
  // [
  //   [1, 1, 1],
  //   [3, 1, 3],
  // ],
  // [
  //   [6, 2, 2, 5],
  //   [2, 2, 2, 5],
  //   [2, 2, 2, 5],
  //   [4, 3, 3, 4],
  // ],
  [
    [1, 1, 1, 2, 2, 2, 2, 1, 1, 1, 1, 1, 1, 1],
    [1, 1, 1, 2, 2, 9, 15, 15, 15, 15, 1, 1, 1, 1],
    [1, 1, 1, 8, 8, 9, 15, 15, 28, 28, 28, 28, 28, 1],
    [1, 1, 1, 8, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30],
    [1, 1, 29, 29, 29, 9, 24, 24, 28, 28, 28, 28, 28, 1],
    [1, 1, 29, 29, 29, 9, 24, 24, 28, 28, 28, 28, 28, 1],
    [1, 17, 29, 29, 29, 17, 24, 24, 28, 28, 28, 28, 28, 1],
    [1, 17, 29, 29, 29, 20, 31, 31, 31, 31, 31, 31, 28, 20],
    [1, 17, 17, 17, 17, 17, 31, 31, 31, 31, 31, 31, 28, 5],
    [1, 17, 17, 27, 27, 27, 31, 31, 31, 31, 31, 31, 28, 22],
    [1, 17, 17, 27, 27, 27, 31, 31, 31, 31, 31, 31, 28, 22],
    [1, 17, 17, 27, 27, 27, 31, 31, 31, 31, 31, 31, 28, 22],
    [1, 17, 17, 27, 27, 27, 31, 31, 31, 31, 31, 31, 22, 22],
    [26, 26, 26, 27, 27, 27, 31, 31, 31, 31, 31, 31, 25, 25],
  ],
].forEach(A => {
  console.log(isPrintable(A));
});

/**
 * 6 2 2 5
 * 2 2 2 5
 * 2 2 2 5
 * 4 3 3 4
 */
