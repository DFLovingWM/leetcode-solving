# 1616. 分割两个字符串得到回文串

## 思路一：分类讨论

组合只能是下面4种情况：

1. A头 + A尾
1. B头 + B尾
1. A头 + B尾
1. B头 + A尾

利用头尾相对的双指针来遍历即可。但这里有个转折，拿`A头 + B尾`的情况来说：因为这两段的长度不一定相等，所以在某个时刻两个指针的字符如果不相等了，这时候不能判定false，而是将剩余未遍历的部分，要么全取A、要么全取B。

## 思路二：中心扩展

该思路参考[Ikaruga的题解](https://leetcode-cn.com/problems/split-two-strings-to-make-palindrome/solution/split-two-strings-to-make-palindrome-by-ikaruga/)。

相当于是思路一的逆向过程：从中心开始扩展，先只取A中间、或只取B中间，扩展到最长之后，剩余的只有两种选择：

1. A头 + B尾
1. B头 + A尾

（并且这两段的长度是相等的）
