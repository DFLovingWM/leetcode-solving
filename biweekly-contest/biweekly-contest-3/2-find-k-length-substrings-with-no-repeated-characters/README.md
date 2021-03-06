# 1100. 长度为 K 的无重复字符子串

## 思路

滑动窗口（固定宽度），使用哈希表/数组记录字母的频次。优化点：

- 当`K > 26 || K > S.length`时，不可能存在满足条件的子串，可以直接返回0。
- 使用一个变量记录当前窗口中满足/不满足的字母种类数，判断时只需要`O(1)`时间，算法整体时间由`O(26N)`降到`O(N)`（常数优化）。
