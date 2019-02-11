# 二叉树知识点

## 1. 基础：preorder、inorder、postorder

- 实现方式
  - 递归：通用、简单
  - 循环：需要利用Stack(因为递归本质上就是system stack)
    - 修改法(用破坏树的手段来避免重复遍历，不可取)
    - hash法(用map/set来记住已遍历的结点，通用)
    - 完美的方法(很棒，但三者各不通用)
    - Morris traversal？
- 以上各种实现的复杂度分析(time、space)

## 2. 考点

- 判断树高
- 判断是否是BST
- 给定两种遍历方式，确定一棵树(需要编码)

## 3. LeetCode题目

- 94
- 144
- 145
