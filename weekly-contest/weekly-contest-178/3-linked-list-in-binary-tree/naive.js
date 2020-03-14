/**
 * 暴力比较
 */
var isSubPath = function(head, root) {
    
  function step(tree, list) {
      if (!list) return true;
      if (!tree) return false;
      return tree.val === list.val && (step(tree.left, list.next) || step(tree.right, list.next));
  }
  
  if (!root) return !head;
  return step(root, head) || isSubPath(head, root.left) || isSubPath(head, root.right);
};