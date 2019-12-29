# K-sum问题

## 题干

给定数组，问是否存在K个数（K是确定的，`K>=2`）、它们的和为sum。

## 通用解法

1. 排序
1. 回溯 + 剪枝
1. 叶子结点为2-Sum问题：双指针/Hash：`O(N)`

时间复杂度：`O(N ^ (K - 1))`

## 题目

- [1. 两数之和(K=2)](https://leetcode-cn.com/problems/two-sum/)
- [15. 三数之和(K=3)](https://leetcode-cn.com/problems/3sum/)
- [18. 四数之和](https://leetcode-cn.com/problems/4sum/)
- [216. 组合总和3(其实是K-sum问题)](https://leetcode-cn.com/problems/combination-sum-iii/submissions/)
- [259. 三数之和小于K](https://leetcode-cn.com/problems/3sum-smaller/)