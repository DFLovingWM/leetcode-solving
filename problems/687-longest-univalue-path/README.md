# 687. 最长同值路径

## 思路

二叉树的任意路径，大体思路都如[124. 二叉树中的最大路径和](https://leetcode-cn.com/problems/binary-tree-maximum-path-sum/)。

对于每个`node`，看它能否连上左结点或右结点，更新最大路径长度，并且返回左右更大者。
