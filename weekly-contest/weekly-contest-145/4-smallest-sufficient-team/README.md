# 1125. 最小的必要团队

## 思路

一开始看到求的是最优的具体方案，觉得DP行不通，只能回溯。但是回溯的时间复杂度太高，会TLE。看了答案才发现DP才是正解，因此在这里纠正一下自己关于区分回溯和DP的观点：

- 求具体方案一般用回溯，但求最优方案时可能是DP。因为就算值是数组类型，也可以通过数组的拷贝来实现“迭代累加”。题目：
  - [96. 不同的二叉搜索树](https://leetcode-cn.com/problems/unique-binary-search-trees/)、[95. 不同的二叉搜索树 II](https://leetcode-cn.com/problems/unique-binary-search-trees-ii/)
  - [1125. 最小的必要团队](https://leetcode-cn.com/problems/smallest-sufficient-team/)
- 求方案数不一定就是DP。当状态不可表示时，只能用回溯求。题目：
  - [52. N皇后 II](https://leetcode-cn.com/problems/n-queens-ii/)
