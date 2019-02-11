/**
 * Right-left DP, using BST to find ceiling/floor element
 * Time complexity: O(NlogN)
 * Actual time cost: [192ms]
 */
var oddEvenJumps = function (arr) {
  const length = arr.length
  let tree = new BST()

  let higher = Array.from({ length }, _ => false),
      lower = Array.from({ length }, _ => false)

  higher[length - 1] = lower[length - 1] = true // The end point
  tree.insert(arr[length - 1], length - 1)

  for (let i = arr.length - 2; i >= 0; --i) { // Reverse DP
    let ceiling = tree.getCeiling(arr[i])
    if (ceiling !== null) {
      higher[i] = lower[ceiling]
    }
    
    let floor = tree.getFloor(arr[i])
    if (floor !== null) {
      lower[i] = higher[floor]
    }

    tree.insert(arr[i], i)
  }

  // console.log(higher)
  // console.log(lower)

  return higher.filter(item => item).length
}

/**
 * Binary Search Tree
 */
class BST {
  constructor (root = null) {
    this.root = root
  }

  insert (key, value) {
    if (!this.root) {
      this.root = new BSTNode(key, [value])
      return
    }

    let parent = null,
        curr = this.root

    while (curr) {
      if (key === curr.key) {
        curr.values.unshift(value) // DP is reverse, so a newer equal node has a higher priority
        return
      } else if (key < curr.key) {
        [ parent, curr ] = [ curr, curr.left ];
      } else {
        [ parent, curr ] = [ curr, curr.right ];
      }
    }

    let newNode = new BSTNode(key, [value])
    if (key < parent.key) {
      parent.left = newNode
    } else {
      parent.right = newNode
    }
  }

  getFloor (key) {
    let p = this.root,
        targetNode = null
    while (p) {
      if (key === p.key) {
        return p.values[0]
      }
      if (
        p.key <= key &&
        (targetNode === null || p.key > targetNode.key)
      ) {
        targetNode = p
      }
      if (key < p.key) {
        p = p.left
      } else {
        p = p.right
      }
    }
    return targetNode ? targetNode.values[0] : null
  }

  getCeiling (key) {
    let p = this.root,
        targetNode = null
    while (p) {
      if (key === p.key) {
        return p.values[0]
      }
      if (
        p.key > key &&
        (targetNode === null || p.key < targetNode.key)
      ) {
        targetNode = p
      }
      if (key < p.key) {
        p = p.left
      } else {
        p = p.right
      }
    }
    return targetNode ? targetNode.values[0] : null
  }
}

/**
 * Binary Search Tree Node
 */
class BSTNode {
  constructor (key, values = [], left = null, right = null) {
    this.key = key
    this.values = values
    this.left = left
    this.right = right
  }
}

module.exports = oddEvenJumps