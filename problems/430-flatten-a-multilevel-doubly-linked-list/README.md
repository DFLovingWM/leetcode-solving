# 430. 扁平化多级双向链表

## 思路

跟114一样有两种思路，只是这里复杂一点，需要处理多个指向：

- 前序遍历 + 重新串联：`child`看作`left`、`next`看作`right`，那么这就相当于二叉树的前序遍历。使用dummy结点重新串联。
- 递归

## 相似题目

- [114. 二叉树展开为链表](https://leetcode-cn.com/problems/flatten-binary-tree-to-linked-list/)
