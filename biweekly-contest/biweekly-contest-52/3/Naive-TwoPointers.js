/**
 * 模拟 + 双指针
 * 时间：O(N^2)
 */
var rotateTheBox = function(box) {
  const [C, R] = [box.length, box[0].length];

  // (r0, c0) -> (c0, C - r0 - 1)
  // 也即：(C - 1 - c, r) <- (r, c)
  const res = Array.from({ length: R }, (_, r) => (
    Array.from({ length: C }, (_, c) => (
      box[C - 1 - c][r]
    )
  )));

  for (let c = 0; c < C; ++c) { // 看每一列
    let prevR = R;
    for (let r = R - 1; r >= 0; --r) { // 自底向上看
      const ch = res[r][c];
      if (ch === '*') {
        prevR = r;
      } else if (ch === '#') {
        // 遇到叶子，则移动到最下方
        --prevR;
        [res[r][c], res[prevR][c]] = [res[prevR][c], res[r][c]];
      }
    }
  }

  return res;
};

module.exports = rotateTheBox;
