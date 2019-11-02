# 1055. 形成字符串的最短路径

## 思路

基本思路：在`target`中连续地拼凑出`source`的子序列，拼不了时就算作1个、然后重新拼。

涉及到判断一个字符串是否是`source`的子序列的问题，参考[392. 判断子序列](https://leetcode-cn.com/problems/is-subsequence/)：

- 双指针法
- 二分法
