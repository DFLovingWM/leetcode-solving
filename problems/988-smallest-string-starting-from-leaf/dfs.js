/**
 * DFS：将所有路径取出来，逆转，取最小
 * 
 * 时间：`O(N)`, 76ms
 */
function smallestFromLeaf (root) {
  const paths = []
  
  function backtrack (node, acc) {
    acc = getChar(node.val) + acc

    if (!node.left && !node.right) { // 叶子结点
      paths.push(acc)
      return
    }

    if (node.left) {
      backtrack(node.left, acc)
    }
    if (node.right) {
      backtrack(node.right, acc)
    }
  }

  backtrack(root, '')
  return getMin(paths)
};

function getChar (n) {
  return String.fromCharCode('a'.charCodeAt(0) + n)
}

function getMin (strings) {
  let res = strings[0]
  for (const string of strings) {
    if (string < res) {
      res = string
    }
  }
  return res
}