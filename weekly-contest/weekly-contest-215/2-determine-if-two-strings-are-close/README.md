# 5603. 确定两个字符串是否接近

统计每个字母的频次`F`。“接近”的充要条件是：

- key集相同。操作1实际上是互换字母，不会产生新字母。
- 频次相同。操作2实际上是频次互换，不会产生新频次。

具体来说，要比较是否“相同”，有两种方法：

1. 排序法：排序后，比较数组是否相等。
2. 哈希法：求频次，看频次是否相等。
