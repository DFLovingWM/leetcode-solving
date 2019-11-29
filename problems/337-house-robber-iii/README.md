# 337. 打家劫舍 III

## 题意

与版本1的区别是，如今在二叉树上偷窃。

## 思路

动态规划。思路同198题：

- 思路1
  - 形式：Top-down DP
  - 状态表示：`f(node)`表示当前在`node`中(任意处置，可以偷或不偷)、最终达到的最大价值
  - 状态转移：`f(node) => max( node.val + f(node.left.left) + f(node.left.right) + f(node.right.left) + f(node.right.left), f(node.left) + f(node.right) )`
  - 特点：需要同时跨越3层，操作树结点要注意空指针
- 思路2：树形DP
  - 形式：Tree DP
  - 状态表示：`f(node)`意义同上，但返回值变为长度为2的数组，表示`[不偷node, 偷node]`最终达到的最大价值
  - 状态转移：`f(node) => max( max(f(node.left)) + max(f(node.right)), node.val + f(node.left)[0] + f(node.right)[0] )`
  - 特点：不需要使用Map缓存
- 思路3（不推荐）：将思路2的多个出参，拆分一个到入参中，保持单返回值
  - 形式：Top-down DP
  - 状态表示：`f(node, rob)`表示对于`node`采取`rob`（`rob`为`true`时表示偷，`false`表示不偷）、最终能达到的最大价值。
  - 状态转移：同思路2，只是需要分类讨论：
    - `f(node, false) => max(f(node.left, true), f(node.left, false)) + max(f(node.right, true), f(node.right, false))`
    - `f(node, true) => node.val + f(node.left, false) + f(node.right, false)`
  - 特点：需要缓存，并且两层Map操作有点烦人

因为状态包括当前结点`node`，属于引用类型，无法使用Bottom-up来写，除非搞一个“结点=>整数”的映射。

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

## 反思总结

树形DP的模板题。
