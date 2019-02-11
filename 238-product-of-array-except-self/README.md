# 思路

题目其实不难，但是它提示除了“除法”外还有别的O(N)解法。

## 1. 除法：O(N)，要注意分类讨论

- 1个0
- 多个0
- 没有0（一般情况）

## 2. prefix product法：O(N)

对于某个数组N来说，其结果为：

result(N) = N左边的product * N右边的product

即：

result(N) = prefix product * N右边的product

于是可以这样：先顺序计算prefix product（不包括自己），再逆序计算每个数字右边的product（可累计）。

[参考这里](https://leetcode.com/problems/product-of-array-except-self/discuss/65622/Simple-Java-solution-in-O(n)-without-extra-space)。