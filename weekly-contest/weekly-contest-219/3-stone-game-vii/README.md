# 5627. 石子游戏 VII

DP问题，而博弈问题用top-down写法更优。

题目已经说明Alice总是胜过Bob，假设

> diff = Alice - Bob

对两个人的考虑可以统一到这个diff上：DP过程中，Alice的决策是使diff最大化、而Bob想使diff最小化，目标并不一致，所以状态除了`(left, right)`，还需要加个`flag`标记，来记录当前是谁在选择。

另外，为了快速求出区间和，可以提前求前缀和。
