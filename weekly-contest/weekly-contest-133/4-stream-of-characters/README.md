# 1032. 字符流

## 思路

- Trie树
- 二分查找模拟Trie树
- AC自动机（Trie + KMP）

## 反思总结

Trie树可以通过有序数组+二分查找模拟。给定下一个字符：

- Trie：只需要`O(1)`定位
- 有序数组：通过二分查找(每次找上、下界来缩小范围)来定位，需要`O(logN)`，但是这个`N`递减

## 参考

[天空的代码世界：Leetcode 第133场比赛回顾](https://mp.weixin.qq.com/s?__biz=MzI2NDA0NDM1MA==&mid=2650106733&idx=1&sn=149c08a35fed7cbb2d72cb442ac187d1&scene=21#wechat_redirect)
