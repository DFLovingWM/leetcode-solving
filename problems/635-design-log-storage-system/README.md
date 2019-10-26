# 635. 设计日志存储系统

## 思路

- 简单数组：适合多写少查
  - put：O(1)
  - retrieve：O(N)
- 维护升序数组 + 二分查找：
  - put: O(N)，数组的弊端
  - retrieve：O(logN + M)，M为给定的范围大小。因为最终要返回子数组，所以这里的M省不了
- 利用有序表（TreeMap）
  - put: O(logN)
  - retrieve: O(MlogN)（@todo 待修正）
