/**
 * 哈希表
 * 时间：104ms
 */

// O(1)
var Leaderboard = function () {
  this.id2Score = new Map()
};

// O(1)
Leaderboard.prototype.addScore = function (playerId, score) {
  if (!this.id2Score.has(playerId)) {
    this.id2Score.set(playerId, 0)
  }
  this.id2Score.set(playerId, this.id2Score.get(playerId) + score)
};

// 用快速选择，将时间优化到O(N)
Leaderboard.prototype.top = function (K) {
  const arr = Array.from(this.id2Score.values())
  let res = 0
  for (let i = quickSelect(arr, arr.length - K); i < arr.length; ++i) {
    res += arr[i]
  }
  return res
};

// O(1)
Leaderboard.prototype.reset = function (playerId) {
  this.id2Score.delete(playerId)
};

module.exports = Leaderboard

function quickSelect (arr, kSmallest) {
  let [left, right] = [0, arr.length]

  while (true) {
    const i = partition(arr, left, right)
    if (i === kSmallest) {
      return i
    } else if (kSmallest < i) {
      right = i
    } else {
      left = i + 1
    }
  }
}

function partition (arr, left, right) {
  const mid = left + (right - left >>> 1)
  swap(arr, left, mid)
  const pivot = arr[left]
  let lastSmall = left
  
  for (let i = left + 1; i < right; ++i) {
    if (arr[i] < pivot) {
      swap(arr, ++lastSmall, i)
    }
  }

  swap(arr, left, lastSmall)
  return lastSmall
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}