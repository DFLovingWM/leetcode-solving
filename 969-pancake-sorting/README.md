# 969 pancake排序

## 题意

给定一个乱序序列A={1...N}，并给定名为flip的操作：将前M个元素reverse。若B为A的正序序列，求A到B的flip路径。

## 思路

需要知道，A到B有很多个不同的变换路径，题目要求只求出其中一条、并满足步数小于(10*N)就可以了。

### 1. (类似)选择排序

参考：[Java flip the largest number to the tail](https://leetcode.com/problems/pancake-sorting/discuss/214200/Java-flip-the-largest-number-to-the-tail)

考虑到flip操作本质上是从0开始到某个位置M(M < N)的区间的reverse，意味着M后面的元素可以不参与reverse，所以可以想到一个类似选择排序的思路：

1. 找最大值，想办法将它flip到最后
2. 将步骤1重复(N-1)次

只不过选择排序是通过swap，而这里只有flip这个操作。

### 2. Any other