# 88. 合并两个有序数组

## 题意

给定两个有序数组A、B，合并成一个有序数据。要求对A原地修改。

## 思路

排序太无脑，就不考虑了。思路有以下两个：

- 从头遍历：跟链表合体一个思路，使用第3个数组C，然后从头一一比较、把更小者装进去。最后需要将C强行copy到A。空间复杂度为O(N + M)。
- 从尾部遍历：原地修改的题目一般都可以考虑O(1)的空间实现，这个也是从题目获得启发。因为A的后段其实是未被利用的，直觉告诉我们可以往里面填充值，于是我们想到，可以逆序遍历、把更大者写到最后的位置。空间复杂度为O(1)。