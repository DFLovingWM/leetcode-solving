# 思路

1. 读懂题意，逻辑完全按照题意来brute-force。
2. 用8-queen的思路：一维数组代替二维数组，time和space都省了，尤其是题目给定的N=10000，二维就随时MLE。至于为什么能用8-queen呢？因为它们的共同点是，整行/列的行为统一，不会出现一行中某些cell是1、另外cell是2的情况，只要某个cell有lamp，那它会照亮整行、整列、整个diagonal。
3. 用Map代替Array，因为数据比较稀疏，用Array会有很多空位，导致MLE。
