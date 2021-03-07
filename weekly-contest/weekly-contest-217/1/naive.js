/**
 * 求和
 */
var maximumWealth = function(accounts) {
  return accounts.reduce((acc, row) => (
    Math.max(acc, row.reduce((sum, col) => sum + col, 0))
  ), -Infinity);
};