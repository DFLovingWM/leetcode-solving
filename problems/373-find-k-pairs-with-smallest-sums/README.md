# 373. 查找和最小的K对数字

## 题意

给定2个升序数组`nums1`和`nums2`，求和最小的前K对。

## 思路

- 暴力/排序：获取所有pair，根据sum升序排序。然后维护一个大小为K的大顶堆，扫描一遍（总共NM个数字）就剩下前K对。忽略了“升序”条件。
  - 时间：O(NM * logK)
- 转化为“合并N个有序链表”问题：2个升序数组分别作为横纵维度，那么它们的和就构成一个二维矩阵M，而且M是横向有序、纵向有序的（联想题目：[378. 有序矩阵中第K小的元素](kth-smallest-element-in-a-sorted-matrix)）。要取前K个，可以维护一个大小为N的小顶堆，以快速获取N个数字中最小的那个，然后遍历K次即可。
  - 时间：O(KlogN)。这里可以选取`nums1`和`nums2`中长度更短的作为N，可以稍微降低复杂度。

## 反思总结

“前K”、“第K”问题都能够用【堆】来解决。
