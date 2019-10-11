# 84. 柱状图中最大的矩形

## 思路

对于这种柱状图，大体思路跟[42. 接雨水](https://leetcode-cn.com/problems/trapping-rain-water/)差不多，考虑的是柱子：

对于每个柱子A来说，寻找以A高度的最大矩形，即从A开始向左、向右找到第一个比它矮的柱子。

核心思路明确之后，算法有：

- 暴力：对于每个柱子，都线性地寻找第一个比它小的。
  - 时间：O(N^2)。
- 单调栈：这实际上是一个【Next Smaller】问题，可以利用单调栈解决。可以参考[739. 每日温度](https://leetcode-cn.com/problems/daily-temperatures/)。
  - 时间：O(N)
