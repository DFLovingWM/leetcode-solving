# 1222. Queens That Can Attack the King

## 思路

因为皇后之间会阻挡，所以只需要枚举以king为中心的8个方向路线上的第一个queen即可。

优化点：将所有queen的坐标进行哈希。
