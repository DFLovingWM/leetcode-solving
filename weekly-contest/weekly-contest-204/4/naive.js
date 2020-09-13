/**
 * DP
 */
var numOfWays = function(nums) {
  const root = buildBST(nums);
  const memo = new Map();
  const mod = 1e9 + 7;

  function helper(node) {
    if (!node) return 0;
    if (memo.has(node)) return memo.get(node);
    
  }

  return helper(root);
};

function buildBST(arr) {
  let root = null;
  
  function insert(node, num) {
    if (!node) return new TreeNode(num);
    if (num < node.val) {
      insert(node.left, num);
    } else {
      insert(node.right, num);
    }
  }

  for (let i = 1; i < arr.length; ++i) {
    root = insert(root, arr[i]);
  }
  return root;
}

module.exports = numOfWays;
