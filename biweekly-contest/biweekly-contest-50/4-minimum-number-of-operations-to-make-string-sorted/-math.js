/**
 * TODO: 一直过不了，估计是 JS 32 位有问题
 * 数学：康托展开
 */

// 快速幂（带模）
function quickMul(x, y, mod) {
  let res = 1;
  let mul = x;
  for (; y; y >>= 1) {
    if (y & 1) {
      res = res * mul % mod;
    }
    mul = mul * mul % mod;
  }
  return res;
}

// 计算乘法逆元
// 实现：费马小定理 + 快速幂
function inv(x, mod) {
  return quickMul(x, mod - 2, mod);
}

function char2Index(char) {
  return char.charCodeAt(0) - 'a'.charCodeAt(0);
}

var makeStringSorted = function(s) {
  const n = s.length;
  const mod = 1e9 + 7;

  // 预处理：字母频次
  const freq = Array.from({ length: 26 }, () => 0);
  for (const ch of s) {
    ++freq[char2Index(ch)];
  }

  // 预处理：阶乘 + 阶乘逆元
  const fac = Array.from({ length: n + 1 }, () => 1);
  const facInv = Array.from({ length: n + 1 }, () => 1);
  for (let i = 1; i <= n; ++i) {
    fac[i] = fac[i - 1] * i % mod;
    facInv[i] = inv(fac[i], mod);
  }

  let res = 0;
  for (let i = 0; i < n - 1; ++i) {
    const ch = char2Index(s[i]);

    // rank: 比 s[i] 小的字母个数
    let rank = 0;
    for (let c = 0; c < ch; ++c) {
      rank += freq[c];
    }

    if (rank !== 0) {
      // 分子
      let curr = rank * fac[n - i - 1] % mod;
      // 分母
      for (let c = 0; c < ch; ++c) {
        curr = curr * facInv[freq[c]] % mod;
      }
      res = (res + curr) % mod;
    }

    --freq[ch];
  }
  return res;
};

// makeStringSorted('aabaa')

/**
"cba"
"aabaa"
"cdbea"
"leetcodeleetcodeleetcode"
"leetcode"
 */