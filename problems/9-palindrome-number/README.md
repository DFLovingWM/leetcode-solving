# 9. 回文数

## 题意

给定一个整数`x`，判断是否是回文数。

## 思路

有两种方式：

- 转化为字符串，然后头尾开始比较（比较一半即可）
- 数位颠倒，比如个位变成最高位，来求“同伴数”（这里巧妙的是，也可以跟字符串一样，转化到一半即可）

特殊情况优化：当x为负数，或者最后一位为0时，直接判断不是回文数。
