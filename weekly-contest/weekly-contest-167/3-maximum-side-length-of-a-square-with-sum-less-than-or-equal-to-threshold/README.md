# 元素和小于等于阈值的正方形的最大边长

## 思路

解法：

- 暴力枚举：`O(N^4)`
- 前缀和：`O(N^3)`
  - 行、列前缀和
  - 矩阵前缀和（容斥原理）
- 前缀和 + 二分：`O(N^2*logN)`
- 前缀和：`O(N^2)`
  - 枚举优化，最多总共`N`次，复杂度为`O(N^2 + N) = O(N^2)`
  - 检查是否存在更大的边长，每个位置只检查1次，复杂度为`O(N^2)`

## 相似题目

- [1277. 统计全为 1 的正方形子矩阵](https://leetcode-cn.com/problems/count-square-submatrices-with-all-ones/)