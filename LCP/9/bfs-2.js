/**
 * 最短路？
 * 正向BFS
 */
var minJump = function(jump) {
  const n = jump.length;
  const visit = Array.from({ length: n }, () => false);

  // 初始结点
  visit[0] = true;
  let currs = [0];
  
  // 开始
  for (let i = 1; currs.length; ++i) {
    const nexts = [];

    for (const curr of currs) {
      // 往左所有
      for (let left = curr - 1; left >= 0; --left) {
        if (!visit[left]) {
          visit[left] = true;
          nexts.push(left);
        }
      }

      // 往右增加一个
      const right = curr + jump[curr];
      if (right >= n) return i; // 目标
      if (!visit[right]) {
        visit[right] = true;
        nexts.push(right);
      }
    }

    currs = nexts;
    console.log(currs);
  }

  return -1;
};

[
  [2, 5, 1, 1, 1, 1],
].forEach(A => {
  console.log(minJump(A))
})