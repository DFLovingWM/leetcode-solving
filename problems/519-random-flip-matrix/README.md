# 519. 随机翻转矩阵

## 思路

受[710. 黑名单中的随机数](https://leetcode-cn.com/problems/random-pick-with-blacklist/)的Hash解法启发，本题也可以用Hash来记录黑数字到白数字的映射。

另外，二维需要扁平化成一维，更好处理，返回坐标时转换一下即可。
