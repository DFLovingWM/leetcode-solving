/**
 * 更简单的BFS，只适用于题意限制的 perfect binary tree，不适用于v2(117题)的一般情况。参考：
 * https://leetcode.com/problems/populating-next-right-pointers-in-each-node/discuss/37472/A-simple-accepted-solution
 * [100ms]
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
function connect (root) {
  for (let leftmost = root; leftmost && leftmost.left; leftmost = leftmost.left) { // Each level
    for (let curr = leftmost; curr; curr = curr.next) { // Each nodes in the level
      curr.left.next = curr.right

      if (curr.next) { // If it's not the rightmost node...
        curr.right.next = curr.next.left // ...then connect to the next node's children
      }
    }
  }
}