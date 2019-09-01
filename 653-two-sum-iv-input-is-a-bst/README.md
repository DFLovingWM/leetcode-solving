# 653. 基于BST的Two sum问题

## 题意

给定一个二叉排序树`root`，问是否存在两个结点使得和为`target`。

## 思路

思路具体看题目1的README：

- 双指针法：BST通过中序遍历转化为数组，然后进行双指针。O(N)。
- Hash法：因为题目求的是True/False，所以这次使用Set即可。然后对于树的遍历，DFS、BFS都行。
