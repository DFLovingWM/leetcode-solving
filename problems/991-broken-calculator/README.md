# 991. 坏了的计算器

## 思路

贪心思想：根据奇偶性，每次只选择一种路径！这样就能够最快逼近目标值。写法有：

- 递归：根据Y的奇偶性，X选择不同的路径逼近Y
- 循环：逆向思维，根据Y的奇偶性，Y选择不同路径逼近X

## 参考

[官方题解](https://leetcode-cn.com/problems/broken-calculator/solution/pi-liao-de-ji-suan-qi-by-leetcode/)对贪心思想的阐述更精彩。

## 标签

- 贪心
- 逆向思维
- 奇偶性(数学)
