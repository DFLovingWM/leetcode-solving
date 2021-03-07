/**
 * Top-down DP
 */
var isScramble = function(s1, s2) {
  const memo = new Map();

  function helper(l, r) {
    if (l === r) {
      return true;
    }

    // 取缓存
    const key = `${l}|${r}`;
    if (memo.has(key)) {
      return memo.get(key);
    }

    // 字符数不同，快速判断为false
    if (!isLike(l, r)) {
      memo.set(key, false);
      return false;
    }

    let res = false;
    const n = l.length;
    for (let i = 1; i < n; ++i) { // 遍历分割点
      if (
        (helper(l.slice(0, i), r.slice(0, i)) && helper(l.slice(i), r.slice(i))) || // 左右子不交换
        (helper(l.slice(0, i), r.slice(n - i)) && helper(l.slice(i), r.slice(0, n - i))) // 左右子交换
      ) {
        res = true;
        break;
      }
    }
    memo.set(key, res);
    return res;
  }

  return helper(s1, s2);
};

// O(L)
function isLike(s1, s2) {
  if (s1.length !== s2.length) {
    return false;
  }

  const A = getFreq(s1);
  const B = getFreq(s2);
  for (const [ch, f] of A) {
    if (B.get(ch) !== f) {
      return false;
    }
  }
  return true;
}

function getFreq(s) {
  const f = new Map();
  for (const ch of s) {
    f.set(ch, (f.get(ch) || 0) + 1);
  }
  return f;
}

module.exports = isScramble;
