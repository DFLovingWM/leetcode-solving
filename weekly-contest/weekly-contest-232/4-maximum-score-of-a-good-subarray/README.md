# 好子数组的最大分数

## 贪心（单调栈）

思考过程：

1. 一个子数组 `A` 的分数取决于`短板 * 长度`
1. 如果伸展，长度一定更大，而短板可能更小；所以一定要往比自己“更大”的方向伸展，这样分数才能增大
1. （贪心地）一直伸展，直到遇到比自己更小的数字之前，就停止。那么对于我来说，这一段数组就是「最大伸展」

于是思路为：对于每个数字 `Ai`，找到 `Ai` 的「最大伸展」，即分别向左、向右找到比 `Ai` 更小的数字，并求出分数。那么最终要的是最大分数。

每一轮都暴力地寻找更小数字的话，整体时间需要 `O(N^2)`，会超时。而 `nextSmaller` 问题有经典的「单调栈」线性解法，将数组进行预处理，最终将整体时间降低到 `O(N)`。
