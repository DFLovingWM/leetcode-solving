/**
 * 找规律/数学优化：
 * 关于Alice与Bob的众多游戏，感觉都是直接return的，哈哈。
 * 
 * 分析参考：https://leetcode.com/problems/divisor-game/discuss/274566/just-return-N-2-0-(proof)
 */
var divisorGame = function(N) {
  return N % 2 === 0
};