/**
 * 最短路？
 * 逆向BFS
 */
var minJump = function(jump) {
  let currs = [];
  const n = jump.length;
  const visit = Array.from({ length: n }, () => false);
  // 初始结点
  for (let i = 0; i < n; ++i) {
    if (i + jump[i] > n) {
      visit[i] = true;
      currs.push(i);
    }
  }
  // 开始
  for (let i = 1; currs.length; ++i) {
    const nexts = [];
    for (const curr of currs) {
      // 往左减
      const left = curr - jump[curr];
      if (left === 0) return i; // 目标
      if (left >= 0 && !visit[left]) {
        visit[left] = true;
        nexts.push(left);
      }
      // 往右所有
      for (let right = curr + 1; right < n; ++right) {
        if (!visit[right]) {
          visit[right] = true;
          nexts.push(right);
        }
      }
    }
    currs = nexts;
  }
  return -1;
};

[
  [2, 5, 1, 1, 1, 1],
].forEach(A => {
  console.log(minJump(A))
})