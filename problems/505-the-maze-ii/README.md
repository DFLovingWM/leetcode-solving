# 505. 迷宫 II

## 思路

共有`NM`个坐标点，求两个点之间的最短路径。解法有：

- BFS
  - 普通队列 + dist。对应SPFA。
  - 优先级队列 + visit + dist：保证每个结点只作为“中心点”1次。对应优先级队列优化的Dijkstra。
- DFS（TLE）：需要用`dist`剪枝
