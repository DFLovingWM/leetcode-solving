# 矩形内船只的数目

## 思路

递归版二分查找：将当前矩形划分为4（或者2、3、5个，常数无所谓）个子矩形，然后递归有船的。题目说的最多有`10`个，其实是剪枝。

时间复杂度：`O(logN)`

这里说一个细节：如果划分为4个矩形，那么`mid`必须属于左下角的矩形，否则会死循环（@todo 待研究：矩形二分查找的细节）
