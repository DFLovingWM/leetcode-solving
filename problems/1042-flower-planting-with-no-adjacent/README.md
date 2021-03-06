# 1042. 不邻接植花

## 题意

`N`个花园，可以种`1/2/3/4`这四种颜色的花，要求相邻花园不能同色。求一种方案。

## 思路

一开始用回溯法（DFS着色）来做，当然能做出来。

但后来看到题目说“there is no garden that has more than 3 paths coming into or leaving it”，即结点的度最大为3，而颜色有4种，那么是一定存在一种方案的。那么其实用贪心思路，遍历每个结点，只要检查相邻结点，找到与所有相邻结点都不冲突的第一个颜色种上即可。
