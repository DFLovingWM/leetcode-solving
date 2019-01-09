# 213 偷窃2

## 题意

与版本1的区别是，结构从 linear 变成了 circle。

## 思路

Circle其实增加而且只增加了一个限制，就是head、tail变成相邻了。所以：

- 如果偷head，则tail注定不能偷，相当于遍历范围：[head, tail - 1]
- 如果不偷head，则前面可以从(head+1)偷起，最后可以偷tail，相当于遍历范围：[head + 1, tail]

所以(again)，变成了求这两个范围的更大值。
