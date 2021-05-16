/**
 * 模拟，逐段处理
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
    let start = R; // 表示一段的起点（开区间点）
    let cnt = 0; // 表示一段的叶子数
    // 将这一段变成叶子
    const batch = () => {
      for (let i = start - 1; cnt > 0; --cnt, --i) {
        res[i][c] = '#';
      }
    };

    for (let r = R - 1; r >= 0; --r) { // 自底向上看
      const ch = res[r][c];
      if (ch === '*') {
        batch();
        start = r;
      } else if (ch === '#') {
        ++cnt;
        res[r][c] = '.'; // 先拿掉叶子
      }
    }
    batch();
  }

  return res;
};

module.exports = rotateTheBox;
