# 1155、硬币组合数

## 思路

大体有两种：

- 递归（TLE）
- DP（AC）

DP思路：dp[n][sum]表示：前n个骰子中，和为sum的组合数。则状态转移方程为：

> dp[i][sum] = dp[i][sum] + dp[i - 1][sum - K]，其中K的范围是[1, F]

优化：在空间上，因为dp[i]只依赖dp[i-1]，所以二维数组可以优化成一维，只需要增加一个临时数组即可。

拓展：DP的两种形式：

- Top-down DP
- Bottom-up DP

两种DP参考[这里](https://leetcode.com/problems/number-of-dice-rolls-with-target-sum/discuss/355940/C%2B%2B-Coin-Change-2)

## 相似题目

- 《剑指offer》面试题43
- [LeetCode 518](https://leetcode.com/problems/coin-change-2/)
