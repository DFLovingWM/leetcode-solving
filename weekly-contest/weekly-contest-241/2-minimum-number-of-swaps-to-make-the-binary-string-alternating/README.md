# 构成交替字符串需要的最小交换次数

从结果上来说，最终的字符串（如果合法）只有两种可能：

- 以1开头，即101010……偶数位为1，奇数位为0
- 以0开头，与之相反

取更小代价者即可。

实现方式可以类比：LC922。
