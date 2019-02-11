## 思路

两种思路：

- 暴力遍历：O(N2)，这个就不多说了
- 前缀和

主要说“前缀和”。该题要求的subarray sum并不严格等于target(K)，而是target的倍数。于是在典型的前缀和解法中，因为用的是hash，只能一个个相减，看是不是target的倍数，这里的时间复杂度并不是O(1)，而且你会发现实际耗时比暴力还要多……于是，需要利用数学规律“取余”来优化（[参考这个评论](https://leetcode.com/problems/continuous-subarray-sum/discuss/99499/Java-O(n)-time-O(k)-space/196267)）：

```plain
(1) Si = i * K + Mi，即：Mi = Si % K
(2) Sj = j * K + Mj，即：Mj = Sj % K

当Mi === Mj时，(2)减(1)有：
Sj - Si = (j - i) * K
即A(i, j)这一段的sum是K的倍数，满足题目要求。
```

即只要记录余数，就能够使“hash比较”部分的时间复杂度变回O(1)。

当然，0不能被mod，所以需要处理K === 0的特殊情况。