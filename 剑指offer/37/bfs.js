/**
 * BFS
 */
var serialize = function (root) {
  if (!root) return '[]';

  const path = [];
  const queue = [root];

  while (queue.length > 0) {
    const node = queue.shift();
    if (!node) {
      path.push(null);
    } else {
      path.push(node.val);
      queue.push(node.left);
      queue.push(node.right);
    }
  }

  let res = '';
  for (let i = 0; i < path.length; ++i) {
    if (i > 0) res += ',';
    res += String(path[i]);
  }
  res = '[' + res + ']';
  return res;
};

/**
 * BFS
 */
var deserialize = function (data) {
  if (data === '[]') return null;

  const arr = data.slice(1, data.length - 1).split(',').map(val => {
    if (val === 'null') return null;
    return Number(val);
  });
  let i = 0;
  const root = new TreeNode(arr[i++]);
  const queue = [root];

  while (queue.length > 0 && i < arr.length) {
    const node = queue.shift();

    // 取数，作为左结点的值
    // 值不是null的时候，才创建结点；否则是NULL结点
    const leftVal = arr[i++];
    if (leftVal !== null) {
      node.left = new TreeNode(leftVal);
      queue.push(node.left);
    }

    // 同理，取数，作为右结点的值
    if (i < arr.length) {
      const rightVal = arr[i++];
      if (rightVal !== null) {
        node.right = new TreeNode(rightVal);
        queue.push(node.right);
      }
    }
  }

  return root;
};