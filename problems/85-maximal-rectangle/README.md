# 85. 最大矩形

- 线段前缀和
  - 右下角，往上遍历递减的宽度
  - O(N^3)
- 单调栈
  - 降维：以每一行作为柱形图的底部，得到一个高度数组，即[84(一维版本)](https://leetcode-cn.com/problems/largest-rectangle-in-histogram/)，直接利用其单调栈解法
  - O(N^2)
