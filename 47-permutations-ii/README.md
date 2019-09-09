# 47. 全排列2

## 题意

给定的数字中存在重复元素，求所有不重复的排列。

## 思路

有至少2种思路：

- 全排列+去重，具体解法：
  - DFS + HashSet
  - BFS + HashSet
- （不用HashSet的解法）剪枝：先对原始排列进行排序、以让重复元素聚集在一起，然后在要取下一个数字时，重复的数字只取一次。具体解法：
  - DFS：需要先排序，然后递归前剪枝
  - BFS：遇到重复元素就break（而不是continue），直接轮到下一个旧序列。@todo：原理不是太清楚。参考[
Java Iterative solution, no Set needed!](https://leetcode.com/problems/permutations-ii/discuss/18630/Java-Iterative-solution-no-Set-needed!)
