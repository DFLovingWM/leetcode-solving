# 规划兼职工作

## 思路

据说是个老题。解法很多：

- 排序 + DP + 二分查找（维护有序数组）
- TreeMap（使用有序表）
- 堆
- 树状数组/线段树

这里记录第一种方法的思路：

先对全部区间按照end升序排序（因为对于一个新区间B，在遍历之前的旧区间A时，只需要判断是否满足`B.start >= A.end`即可）。

设`dp[i]`表示以第`i`个工作为结尾时能获取的最大效益，则有：`dp[i] = max(dp[j]) + profit[i]`，`j`为`i`前面与它不冲突的一个区间。由于每次都要找不冲突的max，时间复杂度就是O(N^2)，会超时。所以我们不妨维护一个关于【收益】的升序数组dp，即dp中只存放有效的、收益递增的选择：

- 因为end已经是升序的了（前面排序），所以对于区间`i`，二分查找与其不冲突的最大效益区间`j`
- 为了维护收益升序，只有当`i`的收益（`dp[j] + profit[i]`）比dp尾项（最大值）更大时，才把它加入`dp`数组中

时间复杂度：O(NlogN + NlogN) = O(NlogN)

## 参考

- [GeeksForGeeks: Weighted Job Scheduling in O(n Log n) time](https://www.geeksforgeeks.org/weighted-job-scheduling-log-n-time/)
