/**
 * S(1)的BFS。参考：
 * [104ms]
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node-ii/discuss/37811/Simple-solution-using-constant-space
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
function connect (root) {
  while (root) { // Here 'root' is the leftmost node in parent level
    const dummy = new TreeLinkNode() // 'dummy.next' points to the leftmost node in the current level
    let p = dummy // 'p' is the walker

    while (root) {
      if (root.left) {
        p.next = root.left
        p = p.next
      }
      if (root.right) {
        p.next = root.right
        p = p.next
      }

      root = root.next // Clever step! Level-order traversal(making use of the 'next' built just now).
    }

    root = dummy.next // Restore 'root' to the start node of current level
  }
}