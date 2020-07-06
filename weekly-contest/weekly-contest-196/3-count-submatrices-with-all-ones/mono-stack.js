/**
 * 单调栈
 */
var numSubmat = function(mat) {
  const [m, n] = [mat.length, mat[0].length];
  const prefix = Array.from({ length: m }, () => (
    Array.from({ length: n }, () => 0)
  ));
  for (let i = 0; i < m; ++i) {
    prefix[i][m - 1] = mat[i][m - 1];
    for (let j = m - 1; j >= 0; --j) {
      if (mat[i][j] === 0) {
        prefix[i][j] = 0;
      } else {
        prefix[i][j] = prefix[i][j + 1] + 1;
      }
    }
  }

  let res = 0;
  
  for (let j = 0; j < n; ++j) { // 遍历每一列
    const stack = [];
    let sum = 0;

    for (let i = m - 1; i >= 0; --i) { // 逆序遍历每一行
      let count = 0;
      
      while (stack.length > 0 && stack[stack.length - 1][0] > prefix[i][j]) {
        const top = stack[stack.length - 1];
        sum -= (top[1] + 1) * (top[0] - prefix[i][j]);
        count += top[1] + 1;
        stack.pop();
      }

      sum += prefix[i][j];
      res += sum;
      stack.push([prefix[i][j], count]);
    }
  }

  return res;
};