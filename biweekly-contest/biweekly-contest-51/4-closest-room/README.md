# 最近的房间

考点：离线查询 + 二分。

对于条件 1（合法解）：将 rooms 按照 roomSize、queries 按照 minSize 降序排序，用一个容器维护当前合法房间（保证对于当前 minSize，容器中所有房间都大于等于 minSize）

对于条件 2（最优解）：这个容器选用有序表（C++ Set），就能快速对 preferId 二分

时间复杂度：`O(NlogN + QlogQ + QlogN)`。由于`N > Q`，所以可认为是`O(NlogN)`。
