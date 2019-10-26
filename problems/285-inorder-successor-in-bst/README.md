# 285. 二叉搜索树中的顺序后继

## 题意

给定BST和某个键target（target可能存在或不存在于BST中），寻找大于target的最小结点。

## 思路

找到比某个key更大的最小结点。有以下思路：

- 线性遍历：O(N)
  - 方法1: 用双（前后）指针中序遍历BST，当prev指向target时，curr就是答案。
  - 方法2: 中序遍历将BST化为数组，然后进行二分查找。
- 二分遍历：O(logN)
  - 方法：二分遍历BST：如果target小于curr，记录curr的同时、往左边走；如果target大于等于curr，往右边走。最终curr就是答案。
