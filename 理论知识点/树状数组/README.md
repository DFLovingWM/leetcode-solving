# 树状数组

## 定义

树状数组/二叉索引树/Fenwick树，比线段树简单，它主要用以解决以下需求：

- 单点更新
- 区间查询

操作有：

- `constructor(nums)`：构造树状数组
  - 时间：O(NlogN)或O(N)
- `update(i, delta)`：单点更新
  - 时间：O(logN)
- `rangeSum(i, j)`：查询区间和
  - 时间：O(logN)

## 参考

https://blog.csdn.net/Yaokai_AssultMaster/article/details/79492190
