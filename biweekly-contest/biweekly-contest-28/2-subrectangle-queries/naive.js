/**
 * 暴力
 * 
 * 100ms
 */

// O(1)
var SubrectangleQueries = function(rectangle) {
  this.matrix = rectangle;
};

// O(N^2)
SubrectangleQueries.prototype.updateSubrectangle = function(row1, col1, row2, col2, newValue) {
  for (let i = row1; i <= row2; ++i) {
    for (let j = col1; j <= col2; ++j) {
      this.matrix[i][j] = newValue;
    }
  }
};

// O(1)
SubrectangleQueries.prototype.getValue = function(row, col) {
  return this.matrix[row][col];
};

module.exports = SubrectangleQueries;