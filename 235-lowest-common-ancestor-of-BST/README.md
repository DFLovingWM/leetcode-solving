# 235 LCA of a BST

## 题意

给定一个BST(二叉搜索树)，再给两个(存在且不同的)结点A、B，求A、B的最近共同祖先结点(Lowest Common Ancestor, e.g. LCA)。

## 思路

以下思路分别可以使用 iterative 或 recursive 来实现。

### 1. 求出路径数组(全搜索)

分别求从root到A、B的路径数组。然后从尾找到第一个相同的结点，就是LCA。

### 2. 半搜索

方法1太老实，其实不需要完全走到A、B，只需要走到路径分叉的地方，所在结点就是LCA。