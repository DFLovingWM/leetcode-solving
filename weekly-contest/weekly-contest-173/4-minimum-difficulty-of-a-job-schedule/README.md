# 工作计划的最低难度

## 思路

动态规划。

“工作间的依赖关系”是理解本题的关键：要做第`i`项工作，需要先完成工作`[0, i-1]`。所以这是一个“切蛋糕/分割字符串”的DP问题，可以类比[1278. 分割回文串 III](https://leetcode-cn.com/problems/palindrome-partitioning-iii/)，从左往右、切成`d`段，累加每一段的最大值。

`dp[d][i]`表示前`d`天完成前`i`项工作的最小难度和，则有：`dp[d][i] = min(dp[d - 1][j] + maximum)`，其中`0 <= j < i`，而`maximum`可以通过逆序遍历`j`来同时推导。
