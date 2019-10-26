/**
 * 一圈圈（曼哈顿距离）遍历：4条45度的边，主要是对坐标的细节处理
 * 类似于BFS（所以也可以用BFS的套路来写）
 */
var allCellsDistOrder = function(R, C, r0, c0) {
  let cords = [[r0, c0]]
  let sum = R * C

  for (let i = 1; true; ++i) {
    let r, c;

    // top => left
    [r, c] = [r0 - i, c0];
    for (let j = 0; j < i; ++j) {
      if (isValid(R, C, r, c)) {
        cords.push([r, c])
        if (cords.length === sum) return cords
      }
      [r, c] = [r + 1, c - 1]
    }

    // left => bottom
    [r, c] = [r0, c0 - i];
    for (let j = 0; j < i; ++j) {
      if (isValid(R, C, r, c)) {
        cords.push([r, c])
        if (cords.length === sum) return cords
      }
      [r, c] = [r + 1, c + 1]
    }

    // bottom => right
    [r, c] = [r0 + i, c0];
    for (let j = 0; j < i; ++j) {
      if (isValid(R, C, r, c)) {
        cords.push([r, c])
        if (cords.length === sum) return cords
      }
      [r, c] = [r - 1, c + 1]
    }

    // right => top
    [r, c] = [r0, c0 + i];
    for (let j = 0; j < i; ++j) {
      if (isValid(R, C, r, c)) {
        cords.push([r, c])
        if (cords.length === sum) return cords
      }
      [r, c] = [r - 1, c - 1]
    }
  }
};

function isValid (row, col, r, c) {
  return r >= 0 && r < row && c >= 0 && c < col
}

[
  [1,2,0,0],
  [2,2,0,1],
  [2,3,1,2],
].forEach(input => {
  console.log(allCellsDistOrder(...input))
})
