/**
 * 贪心：每次都选择跳到最远
 */
var minJump = function(jump) {
  const n = jump.length;

  // `next[i]`表示从`i`能跳到的下一个位置
  const next = Array.from({ length: n }, (_, i) => i);
  for (let i = 0; i < n; ++i) {
    next[i] += jump[i];
  }

  // max[i]表示前缀范围`0~i`能跳到的最远距离
  const max = Array.from({ length: n }, () => -1);
  max[0] = next[0];
  for (let i = 1; i < n; ++i) {
    max[i] = Math.max(next[i], max[i - 1]);
  }

  // 出发
  let res = 0;
  let i = 0; // 当前位置
  while (i < n) {
    // 往右一个
    const right = next[i];

    // 往左全部中的最远
    let left = -Infinity;
    if (i - 1 >= 0) {
      left = max[i - 1];
    }

    // 贪心：取最远的
    if (left >= right) {
      res += 2;
      i = left;
    } else {
      res += 1;
      i = right;
    }
  }
  return res;
};

[
  [2, 5, 1, 1, 1, 1],
].forEach(A => {
  console.log(minJump(A))
})