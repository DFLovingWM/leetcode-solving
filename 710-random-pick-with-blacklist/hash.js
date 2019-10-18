/**
 * HashMap：建立B到W的映射
 */

// O(B)
var Solution = function (N, blacklist) {
  const blackSet = new Set(blacklist)
  const W = N - blacklist.length // 白名单数量

  const availableWhiteSet = new Set() // 可用的白名单结点
  for (let i = W; i < N; ++i) { // O(B)
    if (!blackSet.has(i)) {
      availableWhiteSet.add(i)
    }
  }

  const white = availableWhiteSet.values()
  const mapping = new Map()
  for (const b of blacklist) { // O(B)
    if (b < W) {
      mapping.set(b, white.next().value)
    }
  }

  this.mapping = mapping
  this.W = W
};

// O(1)
Solution.prototype.pick = function () {
  const i = Math.floor(Math.random() * this.W)
  if (this.mapping.has(i)) return this.mapping.get(i)
  return i
};

module.exports = Solution