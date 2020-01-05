# 646. 最长数对链

## 思路

### DP

排序后，转化为最长上升子序列问题。使用Bottom-up DP求解，时间为`O(N^2)`。

PS.因为每个元素不是单一数字，所以无法使用`Patient Sorting`法来解。

### 贪心

将pair看成区间，问题转化为：删除某些区间，使得剩余的不相交区间最多。是不是很熟悉？435题。

时间复杂度：`O(NlogN)`，主要在于排序，因为贪心遍历只需要`O(N)`。