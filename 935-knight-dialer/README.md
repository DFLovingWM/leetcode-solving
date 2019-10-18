# 935. 骑士拨号器

## 题意

按照“马”字走法，在电话上拨N个数字，求排列数。

## 思路

这是一个类似全排列的DP问题。前后数字存在一定的关系（“马”），可以事先用一个Map来写好，这样就不必用到矩阵了。

具体解法有：

- 动态规划
  - Top-down
  - Bottom-up
- BFS/层次遍历

## 相似题目

- [1220. 统计元音字母序列的数目](https://leetcode-cn.com/problems/count-vowels-permutation/)
