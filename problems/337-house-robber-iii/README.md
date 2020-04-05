# 337. 打家劫舍 III

## 题意

与House Robber版本1的区别是，数据结构变为二叉树。

## 思路

对于House Robber系列，版本1、2、3的思路本质上是一样的，只是换了数据结构。所以我建议先吃透第1题（LeetCode 198）。

对于二叉树，肯定是树形DP（后序遍历）。根据198题，这里对应地、也有两种思路：

第一种：

- 表示：`f(node)`的返回值为长度为2的数组`[noRob, rob]`，分别表示对于`node`子树，不偷/偷`node`的最大价值
- 边界：null结点返回`[0, 0]`
- 转移：对于`node`这个结点：
  - 不偷：则`node.left`偷不偷都行，`node.right`同理
  - 偷：则`node.left`与`node.right`都不能偷
- 目标：`f(root)`中的更大者

第二种：

- 表示：`f(node)`的返回值表示对于`node`子树能获取的最大价值
- 边界：null结点返回0
- 转移：对于`node`这个结点
  - 不偷：则与`node.left`、`node.right`都无关，两者相加即可
  - 偷：则`node.left`与`node.right`都不能偷，只能从`node.left.left`、`node.left.right`、`node.right.left`、`node.right.right`这四者（与`node`无关）中相加。这里需要注意两点：1、注意对结点判空；2、树形DP一般不需要缓存，但这种状态设计因为存在重复子问题（对同一结点有多次调用），所以需要缓存
- 目标：`f(root)`
