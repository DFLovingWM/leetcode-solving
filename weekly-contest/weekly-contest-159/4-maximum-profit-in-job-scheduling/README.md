# 规划兼职工作

## 题意

给定若干兼职，问怎么挑选才能使收益最大？

## 思路

典型的0/1背包问题，题目难点在于状态跨度太大（`10^9`），无法申请这么大的下标进行DP。

朴素算法：按照`endTime`排序，然后`dp[i]`表示以第`i`个兼职工作结尾的最大收益。那么对于每一个新的兼职工作`i`，查找与其不冲突的最大的`dp[j]`，则有`dp[i] = max(dp[j]) + profit[i]`。需要`O(N^2)`时间，会超时。

单调优化：接上，求出`dp[i]`后再进行`dp[i] = max(dp[i], dp[i-1])`就能使`dp`保持单调递增。然后查找`j`时，第一个不冲突的`j`就是最大的`dp[j]`，提前退出，省时间。时间远小于`O(N^2)`，可AC。

二分查找优化：接上。由于事先按照`endTime`排序了，因此可以用二分查找来找出上一个不冲突的收益`dp[j]`，又因为`profit`也被维护成升序，所以`dp[j]`也是最大收益。时间为`O(NlogN)`，可AC。

## 参考

- [GeeksForGeeks: Weighted Job Scheduling in O(n Log n) time](https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/)
