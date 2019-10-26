# 1153. 字符串转化

## 思路

转化为有向图，字母即结点，转化即有向边。

首先，搞清楚顺序：如果`a=>b`、`b=>c`，那么肯定是先转化`b=>c`，再到`a=>b`。因为如果是先进行`a=>b`的话，后面再进行`b=>c`时会影响前面已经改变过的。所以顺序一定是逆向拓扑排序。

分类讨论：

- 如果A=B，则成功
- 如果存在一个结点的出度大于1，则失败（因为一个字母无法同时转化为其它多个字母）
- 如果存在环：如果没有空闲字母、或者解决了非环部分还是没有空闲字母的话，则失败（@todo，存疑：'abc => abc'不行(只有abc)、'abcde => bcdec'可以(只有abcde)）

## 参考

- [力扣周赛题解：第6场双周赛](https://mp.weixin.qq.com/s/8JRBQU9_aBHPPTennxsQBQ)
- [KLEA123的题解](https://leetcode-cn.com/problems/string-transforms-into-another-string/solution/zi-fu-chuan-wen-ti-by-lenn123/)
