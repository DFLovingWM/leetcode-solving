# 1099. 小于 K 的两数之和

## 题意

给定`K`，找出两个数字，使得它们的和小于`K`并且最接近`K`。求出该和。

## 思路

与Two Sum问题的思路是类似的，只是这里变成了非等值搜索：

- 暴力：`O(N^2)`，该题数据弱，可以AC
- 排序 + 双指针：`O(NlogN)`
- 哈希（不适用）
