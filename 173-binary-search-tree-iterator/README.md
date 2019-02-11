# 173 BST迭代器

## 1. 思路

### 1.1 整体获取inorder路径

一开始就对整棵树进行 inorder 遍历(recursive/iterative)，得到的 path 数组便是有序数组。

然后 iterator 每次负责取一个就行了。

### 1.2 “动态”遍历

与方法1.1相反，该方法则是在调用 next 的时候才去遍历。因为是“动态”的缘故，无法使用recursive，只能采取iterative。

具体思路是：
