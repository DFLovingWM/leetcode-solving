let pathX, pathY

/**
 * 思路：获取路径数组
 */
var isCousins = function(root, x, y) {
  pathX = []
  pathY = []
  getPath(root, x, pathX)
  getPath(root, y, pathY)
  // console.log(pathX, pathY)
  return pathX.length === pathY.length && pathX[pathX.length - 2] !== pathY[pathY.length - 2]
}

function getPath (node, targetNumber, partialPath) {
  if (!node) return

  partialPath.push(node.val)
  if (node.val === targetNumber) return

  getPath(node.left, targetNumber, partialPath)
  if (partialPath[partialPath.length - 1] === targetNumber) return

  getPath(node.right, targetNumber, partialPath)
  if (partialPath[partialPath.length - 1] === targetNumber) return
  
  partialPath.pop() // Backtrack
}

/*
[1,2,3,4]
4
3
[1,2,3,null,4,null,5]
5
4
[1,2,3,null,4]
2
3
*/