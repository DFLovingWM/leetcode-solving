# 4. 下降路径最小和 II

## 思路

动态规划。该模型比较简单，直接使用Bottom-up DP也很好理解：

- 状态表示：`dp[i][j]`表示前`i`行中、最后一行落在第`j`列的最小和
- 状态转移：`dp[i][j] = min(dp[i-1][k]) + mat[i-1][j]`，其中`k !== j`
- 边界：`dp[0]`全为0
- 目标：最后一行即`dp[n]`中的最小值

## 相似题目

类似的DP，但不相同：

- [265. 粉刷房子 II](https://leetcode-cn.com/problems/paint-house-ii/)
- [120. 三角形最小路径和](https://leetcode-cn.com/problems/triangle/)
