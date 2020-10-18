# 5128. 带阈值的图连通性

只需要解决两个问题：

## 1、判断任意两个结点的连通性？

一般使用并查集，union/find的时间复杂度近似`O(1)`。

## 2、如何对两个数字建立联系？

> 思路一：GCD

二重循环，求两个数字的GCD并与阈值比较，这样的复杂度为`O(N^2 * logN + Q)`。实际会超时。

> 思路二：筛法

思路一主要在于需要花时间求GCD，这一步可以用筛法思路省略掉。首先枚举比阈值大的倍数`k`，然后遍历`1k`、`2k`、`3k`……`nk`，这里可以以`1k`为“根”，后面的与它建立连通性。

这样时间只需要`O(NlogN + Q)`。实际能AC。

时间复杂度分析以及更优解法，可以参考：

- [带阈值的图连通性](https://leetcode-cn.com/problems/graph-connectivity-with-threshold/solution/dai-yu-zhi-de-tu-lian-tong-xing-by-zerotrac2/)
- [数学+并查集](https://leetcode-cn.com/problems/graph-connectivity-with-threshold/solution/shu-xue-bing-cha-ji-by-lucifer1004/)
