# 658. 找到 K 个最接近的元素

## 题意

给定排序好的数组，找出K个最接近target的元素。

## 思路

有序数组中二分查找的几种场景：

1. 等值搜索：寻找target，返回其所在下标
1. 非等值搜索：寻找最接近target的元素，即寻找其上界、下界
1. 非等值、范围搜索：寻找最接近target的K个元素

前2种的做法是差不多的。这道题就是第3种。思路有：

- 堆：将问题看成【Top K】问题，维护大小为K的最“不接近”堆。
  - 时间：O(NlogK)，没有利用“有序”的条件
- 头尾双指针：目的是要找一个大小为K的区间，一开始从两端开始，头尾比较、删除与target差值更大的那个，最终留下的K个与target差值最小，就是答案。
  - 时间：O(N - K)，因为指针总共移动(N - K)次
- 二分查找：用二分的方式查找目标区间的【左边界】：如果`target - arr[middle] <= arr[middle + K] - target`，则走左边（需要将区间往左边挪动）；否则走右边。该方法的细节尚存疑（@todo）。
  - 时间：O(log(N - K))

## 反思总结

该题可以看成是【非等值、范围型】二分查找的标准题目。

## 参考

[排除法（双指针） + 二分法（Python 代码、Java 代码）](https://leetcode-cn.com/problems/find-k-closest-elements/solution/pai-chu-fa-shuang-zhi-zhen-er-fen-fa-python-dai-ma/)
