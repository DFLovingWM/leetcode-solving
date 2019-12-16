# 元素和小于等于阈值的正方形的最大边长

## 思路

一句话总结：暴力枚举需要`O(N^4)`，利用前缀和可以优化到`O(N^3)`。

- 行、列前缀和
- 矩阵前缀和（容斥原理）

## 相似题目

- [1277. 统计全为 1 的正方形子矩阵](https://leetcode-cn.com/problems/count-square-submatrices-with-all-ones/)
