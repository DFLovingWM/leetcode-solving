/**
 * O(1)
 */
var TreeAncestor = function(n, parent) {
  this.parent = parent;
};

/** 
 * O(N)
 */
TreeAncestor.prototype.getKthAncestor = function(i, k) {
  while (k-- && i !== -1) {
    i = this.parent[i];
  }
  return i;
};

module.exports = TreeAncestor;