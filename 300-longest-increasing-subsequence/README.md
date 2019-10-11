# 300. 最长上升子序列

## 思路

- 动态规划：设`dp[n]`为以`n`结尾的序列的长度。对于每一个数字n，寻找前面比n小、长度最大的值A，则`dp[n] = A + 1`。
  - 时间：O(N^2)，因为寻找最大值需要O(N)，总共需要N次
- 二分查找：参考[纸牌游戏思路](https://leetcode-cn.com/problems/longest-increasing-subsequence/solution/dong-tai-gui-hua-she-ji-fang-fa-zhi-pai-you-xi-jia/)，实际上是`Patient Sorting`思路，然后牌堆数就是序列长度
  - 时间：O(NlogN)
