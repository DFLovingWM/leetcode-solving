# 94. 中序遍历

给定一个二叉树，求中序遍历的路径。

## 思路

首先大方向分为两种。然后循环法中又可以细分。

- 递归
- 循环
  - stack：保存待遍历的结点。该方法需要避免再次回到子根时又对左子树进行保存，有几种子思路可以解决这个问题：
    - 提前将当前能获取的所有左结点入栈：每检索到一个结点A，都提前将A的左结点B、B的左结点C、C的左结点D……依次入栈。检测右结点A时，也重复该过程。对应`stack-all.js`
    - 斩断左结点（修改树）：对应`stack-cut.js`
    - 标记（用Set，不必修改树）：对应`stack-mark.js`
  - stack：保存左结点。对应`stack-left.js`
  - Morris遍历

## 反思总结

中序遍历模板题。

另外，对于Morris遍历，有：

- 目的：达到O(1)空间，避免使用stack（手动栈）或递归（系统栈）
- 核心：将左子树“旋转”为左父结点，即让左子树的rightmost结点赋予新的右子结点，从而使树变为线性结构（线索二叉树）

## 参考

- [Three Methods to Solve (C++)](https://leetcode.com/problems/binary-tree-inorder-traversal/discuss/31232/Three-Methods-to-Solve-(C%2B%2B))
