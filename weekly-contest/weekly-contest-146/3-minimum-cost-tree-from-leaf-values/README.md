# 1130. 叶值的最小代价生成树

## 思路

### 动态规划

递归函数`f(left, right)`表示区间`[left, right]`构成树的最小代价。虽然从题意来看似乎是从叶子开始往上构建，但我们考虑从根开始划分左右子树。引入划分点`k`，范围是`[left, right)`，使得左子树为`[left, k]`、右子树为`[k+1, right]`，产生代价`max[left:k] * max[k+1:right]`。于是状态转移方程为：

`f(left, right) => max[left:k] * max[k+1:right] + f(left, k) + f(k+1, right)`

终止条件即叶子结点（天然），即当`left === right`时有`f(left, right) => 0`。

可以进行预处理，将所有子区间的最大值求出来。总的时间复杂度：`O(N^3)`。

### 单调栈


