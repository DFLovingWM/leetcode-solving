# 743. 网络延迟时间

## 题意

给定N个结点、若干有向边、起点K，问从K处发射信号，至少需要多久才能使所有结点都能接收到信号。

## 思路

转化为：单源最短路径中，求最长的路径。可以说是最短路径问题的模板题。算法有：

- Dijkstra：配合二叉堆（优先队列）
- Bellman Ford
- Floyd
- SPFA

都可以尝试下。
