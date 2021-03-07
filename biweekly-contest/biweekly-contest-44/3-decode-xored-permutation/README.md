# 解码异或后的排列

隐藏条件：答案是「前N个正整数的排列」即：1、2、3……N，所以XOR之和相当于是已知的。

然后：

1. `sum - (E1 ^ E3 ^ ...)`，得到首元素
2. 顺序推导出剩下的每一个元素