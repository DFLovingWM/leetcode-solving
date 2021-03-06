# 261. 以图判树

## 题意

给定一些结点和无向边，问这个图是否是一个最小生成树。

## 思路

无向图满足最小生成树的条件：

- 边的数量满足`E = V - 1`，不能多、也不能少
- 给定的边不能形成环

所以实际编码时：

- 判定边数量，如果不满足则直接返回false（省时间）
- 根据给定的边构造MST，如果发现有环（一个连通块中的两个结点还有额外的边），就返回false
