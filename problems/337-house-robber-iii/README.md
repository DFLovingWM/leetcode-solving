# 337. 打家劫舍 III

## 题意

与版本1的区别是，如今在二叉树上偷窃。

## 思路

树形DP，使用Top-down DP。

### 写法1

本质上，虽然是树形DP，但DP思路与版本1完全一致。参考版本1题解：如果用第1种思路，需要跨越2个层级，在树中不好操作，所以使用第2种思路，即表示状态的参数有2个：

- `node`(`TreeNode`)：当前结点
- `rob`（`boolean`）：偷(`true`)或不偷(`false`)

则对于结点`node`，策略有：

- 不偷：对于`node.left`、`node.right`来说，偷不偷都行，返回两种选择中的max即可。
- 偷：则`node.left`、`node.right`不能偷。

所以，状态转移方程为：

```js
f(node, false) = max(f(node.left, true), f(node.left, false)) + max(f(node.right, true), f(node.right, false))
f(node, true) = node.val + f(node.left, false) + f(node.right, false)
```

### 写法2

还是同一种思路，但递归函数设计为：<u>策略参数从入参转移到出参</u>。`dfs(node)`表示遍历以`node`为根的子树时，能获得的最大金额，返回值为长度为2的数组`[A, B]`，表示`[偷node的最大价值，不偷node的最大价值]`。

### 综上

综上，两种写法各有优点：

- `f(node, rob)`：符合平时的Top-down写法，因为有重复子问题，所以需要缓存结果。然而`node`为结点，不能简单地hash为整数/字符串，JavaScript又不能获取指针的地址值，所以处理起来优点麻烦。
- `f(node)`：本质上也是Top-down DP，但它的轨迹就是树的深搜、即每个结点只求一次，所以不必手动缓存结果。

## 反思总结

树形DP的模板题。
