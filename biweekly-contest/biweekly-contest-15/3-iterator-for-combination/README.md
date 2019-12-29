# 3. 字母组合迭代器

## 思路

对于迭代器类型的题目，大体思路不外乎两种：

- hungry：提前求出所有结果放在一个数组中，然后迭代器遍历`next``hasNext`都是常数时间。但结果集较大时，不推荐这么做。
- lazy：迭代器的本质就应该是lazy的，它把时间花在每一次调用`next`中。

此题中，hungry实现就是一个回溯算法，这里只讨论lazy模式。有两种做法：

- 贪心（规律1）
- 位运算（规律2）

## 相似题目

该题与31题都是求“下一个排列”，但前者的排列是升序的，后者是任意的。但都可以用`O(N)`（贪心）算法来解决，可以对比下：

[31. 下一个排列](https://leetcode-cn.com/problems/next-permutation/)