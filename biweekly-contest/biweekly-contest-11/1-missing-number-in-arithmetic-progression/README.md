# 等差数列中缺失的数字

## 题意

给定等差数列，找出缺失的那一个值（保证不是头尾）。

## 思路

有2种思路，都是O(N)时间：

- 贪心：一般元素的前后差值为`d`，而缺失位置的前后元素的差值为`d * 2`。所以遍历前后差即可，但需要处理`d === 0`这个边界情况。
- 求和：缺失的值等于整体求和减去当前和。先用等差数列求和公式求出和`sum`，然后求出当前和`currSum`，缺失的值就是`sum - currSum`
