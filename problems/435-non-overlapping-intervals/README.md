# 435. 无重叠区间

## 题意

给定区间集合。问最少需要移除多少个区间，才能使剩余的所有区间互不冲突？

## 思路

[官方题解](https://leetcode-cn.com/problems/non-overlapping-intervals/solution/wu-zhong-die-qu-jian-by-leetcode/)已经把整个思路历程讲得非常有条理，推荐大家看看。

- 暴力
  - 时间：O(2^N)，指数级，超时
  - 空间：O(N)，递归树深为N，每层可以只使用O(1)空间
- 动态规划
  - 时间：O(N^2)，多项式级别
  - 空间：O(N)
- 贪心
  - 时间：O(NlogN)，主要是排序的时间，遍历过程只需要O(N)
  - 空间：O(logN)，取决于排序

## 反思总结

这是道有代表性的贪心题目，好题！

我很喜欢的一个作者labuladong在他的文章[贪心算法之区间调度问题](https://mp.weixin.qq.com/s?__biz=MzU0MDg5OTYyOQ==&mid=2247484319&idx=1&sn=49a9e82e93fe29eb934d9a618be57174&chksm=fb3363ddcc44eacb57d1be9e1e754a6238870a3c4c126a0be133232c4f7458aaffdaec40c0c8&scene=21#wechat_redirect)总结过：

> 比如说一个算法问题使用暴力解法需要指数级时间，如果能使用动态规划消除重叠子问题，就可以降到多项式级别的时间，如果满足贪心选择性质，那么可以进一步降低时间复杂度，达到线性级别的。
