# 337 偷窃3

## 题意

第3个版本的“偷窃”，数据结构变为二叉树。

## 思路

基本思路就是，对于某一个结点node来说：

- 如果偷node，则node.left和node.right都不能偷。
- 如果不偷node，则对于node.left、node.right，偷不偷都可以。

从root开始DFS，每一个node返回两个值A、B，分别代表偷、不偷该node时获得的最大价值。

## 考点

- DFS
- DP
