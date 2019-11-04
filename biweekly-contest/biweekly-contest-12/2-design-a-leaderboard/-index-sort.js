/**
 * 索引数组：以score为下标，实现自动排序
 * （利用了 `1 <= score <= 100` 的有利条件）
 */
var Leaderboard = function () {
  this.score2Ids = Array.from({ length: 101 }, () => new Set())
  this.id2Score = new Map()
};

// O(1)
Leaderboard.prototype.addScore = function (playerId, score) {
  if (this.id2Score.has(playerId)) { // 累加
    const oldScore = this.id2Score.get(playerId)
    this.score2Ids[oldScore].delete(playerId)
    this.score2Ids[oldScore + score].add(playerId)
  } else { // 新增
    this.score2Ids[score].add(playerId)
  }
  this.id2Score.set(playerId, score)
};

// O(100)
Leaderboard.prototype.top = function (K) {
  let res = 0
  for (let i = 100; i >= 0 && K > 0; --i) {
    const count = this.score2Ids[i].size
    res += i * Math.min(K, count)
    K -= count
  }
  return res
};

// O(1)
Leaderboard.prototype.reset = function (playerId) {
  const score = this.id2Score.get(playerId)
  this.score2Ids[score].delete(playerId)
  this.id2Score.delete(playerId)
};