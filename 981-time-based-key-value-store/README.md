# 981

## 思路

### 1. hash + binary search

1. key精准

hash：O(1)，最好的方案

1. timestamp不一定精准，当不能命中target时，要选择其“next smaller”元素（选用数据结构的关键依据！）

（基于数组的）二分查找：

- 插入：本来需要O(N)，但是题意说timestamp递增，所以变成O(1)
- 查找：O(logN)。如果不能命中target，则最后往左寻找“next smaller”
