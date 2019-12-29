# 1092. 最短公共超序列

## 思路

2种思路：

- LCS
  - DP求LCS长度
  - 反推出LCS（或者基于策略DP）
  - 一次遍历，将两个字符串中除去LCS的字符补上，获得SCS
- SCS
  - DP求SCS长度（待用）
  - 反推出SCS（或者基于策略DP）

注意：DP过程基于长度，而不是具体的字符串，否则会使时间从`O(N^2)`变成`O(N^3)`。

## 反思总结

最短公共超序列（SCS）模板题，好题！