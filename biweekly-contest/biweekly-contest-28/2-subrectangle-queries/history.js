/**
 * 记录历史
 * 
 * 108ms
 */

// O(1)
var SubrectangleQueries = function(rectangle) {
  this.matrix = rectangle;
  this.history = [];
};

// O(1)
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
  this.history.push([row1, col1, row2, col2, newValue]);
};

// O(K)
SubrectangleQueries.prototype.getValue = function(row, col) {
  // 倒序找第一个在范围内的
  for (let i = this.history.length - 1; i >= 0; --i) {
    const [r1, c1, r2, c2, v] = this.history[i];
    if (row >= r1 && row <= r2 && col >= c1 && col <= c2) {
      return v;
    }
  }
  // 找不到，说明没有更改过，用初始值
  return this.matrix[row][col];
};

module.exports = SubrectangleQueries;