# 174

## 题意

给定一个迷宫，每个格子有加血或者减血的，问如果从(1,1)顺利到达(R,C)，至少需要多少血量？

骑士只能向右/向下走。在任意时候，如果血量少于1，就会死亡。

## 思考

关键是，为什么是反方向遍历呢？因为题目有一个限制条件，就是骑士从起点到终点的路线上的任意一个位置上，都要保证有剩余血量。

所以，在某个位置(i, j)算得的value，很可能因为未来的某个位置(i2, j2)而失效。

所以，dp(i, j)的意义应该是：（为了能够顺利到达终点，）在(i, j)位置至少拥有的血量。然后逆序遍历，状态转移方程为：

> dp(i, j) = min( dp(i+1, j), dp(i, j+1) ) - dungeon(i, j)

注意，如果算出 dp(i, j) <= 0 ，表示血量为负数或0都可以(不需要血量)，所以重置为1。

## 参考

- 基本方法与dummy优化：[C++ DP solution](https://leetcode.com/problems/dungeon-game/discuss/52774/C%2B%2B-DP-solution)
- Top-down也可以看看：[My AC Java Version, Suggestions are welcome](https://leetcode.com/problems/dungeon-game/discuss/52790/My-AC-Java-Version-Suggestions-are-welcome/53835)
