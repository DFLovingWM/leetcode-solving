# 1207. Unique Number of Occurrences

## 题意

给定一个整数数组，判断每个元素的出现次数是否唯一。

## 思路

1. 数出现次数用`HashMap`(值 => 次数)
1. 判断唯一用`HashSet`(次数)，当集合中已存在，说明冲突了
