# 272. 最接近的二叉搜索树值 II

## 题意

给定二叉搜索树，求最接近target的K个值。

## 思路

Top K问题。

- 堆：最直观思路，但是没有利用有利条件。O(NlogK)
- BST通过中序遍历化为有序数组。于是这道题完全变成了[658. 找到 K 个最接近的元素](https://leetcode-cn.com/problems/find-k-closest-elements/)。思路有：
  - 头尾双指针：O(N + (N - K)) = O(N)
  - 二分查找：O(N + log(N - K)) = O(N)
