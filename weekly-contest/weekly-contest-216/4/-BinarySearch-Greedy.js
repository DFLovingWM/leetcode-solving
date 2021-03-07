/**
 * 二分枚举
 */
var minimumEffort = function(tasks) {
  // 优先做`minimum`更大的（OK）
  tasks.sort((A, B) => {
    if (A[1] !== B[1]) return B[1] - A[1];
    return A[0] - B[0];
  });
  const sum = tasks.reduce((acc, e) => acc + e[0], 0);
  let [left, right] = [sum, 1e9];

  function check(ans) {
    for (const [actual, minimum] of tasks) {
      if (ans < minimum) return false;
      ans -= actual;
    }
    return true;
  }

  while (left < right) {
    const mid = left + (right - left >>> 1);
    if (check(mid)) { // 满足，则找更小的（同时答案保存在left中）
      right = mid;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

[
  [[1,2],[2,4],[4,8]],
  [[1,3],[2,4],[10,11],[10,12],[8,9]],
  [[1,7],[2,8],[3,9],[4,10],[5,11],[6,12]],
].forEach(A => {
  console.log(minimumEffort(A))
})