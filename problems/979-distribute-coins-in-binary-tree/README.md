# 979. 在二叉树中分配硬币

## 思路

递归（后序遍历）：从叶子结点开始往上推算。对于每个结点来说：

- 先从子结点中获取多余（同下，可能是负数）的硬币，则剩余硬币变成`val + left + right`
- 然后，既然目标值是`1`，那么它就能够将剩余的`val - 1`给父结点（注意，`val - 1`可以是负数，但也是统一的），同时累计步数（硬币的变化数）

## 反思总结

“二叉树分配硬币”是某一类题型，本题可以作为入门题，考察的是二叉树式递归（后序遍历/线性时间遍历）。