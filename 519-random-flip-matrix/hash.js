/**
 * Hash
 * 
 * 时间：100ms
 */

var Solution = function (R, C) {
  this.C = C
  this.N = R * C

  this.B = 0
  this.mapping = new Map()
};

Solution.prototype.flip = function () {
  if (this.B === this.N) {
    return []
  }

  const W = this.N - this.B
  const chosen = Math.floor(Math.random() * W)

  let real = chosen
  while (this.mapping.has(real)) {
    real = this.mapping.get(real)
  }

  this.mapping.set(chosen, W - 1)
  ++this.B
  return [Math.floor(real / this.C), real % this.C]
};

Solution.prototype.reset = function () {
  this.B = 0
  this.mapping = new Map()
};

module.exports = Solution