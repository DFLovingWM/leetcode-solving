# 5536. 最大网络秩

## 思路

先求出每个点的度。本想取度最大的两个点，但可能会因为重合而减一，所以只能`O(N^2)`暴力遍历。