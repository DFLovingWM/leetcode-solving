# 65. 有效数字

偏应用/工程的题目，判断用户输入的字符串能够构成合法数字。

作弊法就不说了，就是直接用语言/runtime的API。

## 正则法

可以这样分解：

1. 底数部分
  - 正负号：可选
  - 数字
    - 整数
    - 小数：分3种情况
2. 科学计数法部分
  - Ee符号：可选
  - 正负号：可选
  - 整数

## 确定有限自动机（DFA）

TODO: https://leetcode-cn.com/problems/valid-number/solution/you-xiao-shu-zi-by-leetcode-solution-298l/
