# 98

## 题意

给定一棵二叉树，问是否同时也是一个BST。

## 思路

以下这种简单的递归思路，是不对的：

```js
return root.val > root.left.val && root.val < root.right.val
  isValidBST(root.left) &&
  isValidBST(root.right)
```

因为BST规定，对于一个结点node，它的值不但要大于node.left，而且要比node.left这个子树的所有结点都要大。

所以，需要在递归的时候找出以node.left为根的左子树的max，若node比max还要大，表明node比左子树所有结点都大，就满足了；对于node.right也同理。

可以使用以下这个sample来思考：

> [10, 5, 15, null, null, 6, 20]
