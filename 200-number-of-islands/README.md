# 200. 岛屿数量

## 题意

给定二维grid，1表示陆地，0表示海洋，问有多少个岛屿。

## 思路

岛屿即“连通块”，相当于求连通块的数量。

解法：

- Flood Fill（扩散）：O(N^2)
  - DFS
  - BFS
- 并查集：常规的并查集是一维数组，这里可以将二维下标映射到一维下标

## 参考

- [DFS + BFS + 并查集（Python 代码、Java 代码](https://leetcode-cn.com/problems/number-of-islands/solution/dfs-bfs-bing-cha-ji-python-dai-ma-java-dai-ma-by-l/)
