/**
 * 相同数字，按照【出现顺序】划分到不同的栈中
 * 官方题解真强……
 * 
 * 时间：428ms
 * 空间：79.3MB
 */

// O(1)
var FreqStack = function () {
  this.n2Freq = new Map() // 数字 => 频次
  this.freq2Stack = new Map() // 出现顺序 => 栈
  this.maxFreq = 0 // 最大频次
};

// O(1)
FreqStack.prototype.push = function (x) {
  const freq = (this.n2Freq.get(x) || 0) + 1
  this.n2Freq.set(x, freq)

  this.maxFreq = Math.max(this.maxFreq, freq)

  if (!this.freq2Stack.has(freq)) this.freq2Stack.set(freq, [])
  this.freq2Stack.get(freq).push(x)
};

// O(1)
FreqStack.prototype.pop = function () {
  const targetStack = this.freq2Stack.get(this.maxFreq)
  const res = targetStack.pop()
  if (targetStack.length === 0) {
    this.freq2Stack.delete(this.maxFreq)
    --this.maxFreq
  }

  this.n2Freq.set(res, this.n2Freq.get(res) - 1)

  return res
};

module.exports = FreqStack