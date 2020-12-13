# 767. 重构字符串

## 思路

贪心：从零构造字符串，每次选取频次最高的、并且不与上一个冲突的字母。

因为频次是变化的、并且需要访问最高频次，所以最佳的数据结构是大顶堆/优先队列。不过由于堆中最多只会有26个字母，所以每次暴力排序也是能AC的。时间复杂度：O(N)。

## 扩展思考

如果不需要构造、而是判断是否能构造，那么就会更简单，直接看字母的最高频率(设为A)即可。如果有`A > Math.ceil(N / 2)`，则无法构造。这同样是贪心思想。