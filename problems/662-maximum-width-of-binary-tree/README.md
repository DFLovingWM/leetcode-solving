# 662. 二叉树最大宽度

## 思路

这是个满二叉树，所以可以用其下标规律来给每个结点一个下标值：下标为`n`的结点的左右子结点下标分别为`2n+1`、`2n+2`。对于每一层，两端结点的下标之差，就是该层的宽度。用DFS/BFS都可以。

然而，下标随层数呈现`2^n`增大，有个极端的test case导致下标溢出32位整数。所以如果想写一个完备的解法，就要考虑使用大数（大数乘、加小数）。