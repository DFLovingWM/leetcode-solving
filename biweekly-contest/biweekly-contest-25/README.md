# 题解：双周赛25

这次我是难过的3题选手。4题对应的解法：

- 暴力
- 暴力（枚举）
- 贪心
- DP

## 1、拥有最多糖果的孩子

看每个值加上`extraCandies`后能否达到最大值（固定）即可。

```js
var kidsWithCandies = function(candies, extraCandies) {
  const max = Math.max(...candies);
  return candies.map(e => e + extraCandies >= max);
};
```

## 2、改变一个整数能得到的最大差值

暴力/枚举：二重循环枚举x、y，记录最大、最小值。整个过程使用字符串操作会方便一些。时间复杂度：`O(XYL)`，其中X、Y分别为10，L最多为8，暴力完全能过。

```js
var maxDiff = function(num) {
  const s = String(num);
  let min = Infinity, max = -Infinity;
  for (let i = 0; i <= 9; ++i) {
    for (let j = 0; j <= 9; ++j) {
      const t = getNumber(s, i, j);
      if (t[0] !== '0' && Number(t) !== 0) {
        const n = Number(t);
        min = Math.min(min, n);
        max = Math.max(max, n);
      }
    }
  }
  return max - min;
};

// 将s中每个i字符换成j字符
function getNumber(s, i, j) {
  let res = '';
  for (const ch of s) {
    res += Number(ch) === i ? j : ch;
  }
  return res;
}
```

## 3、检查一个字符串是否可以打破另一个字符串

要看A是否存在一个全排列C能打破B，可以贪心构造C，即我们可以计算A的频次（哈希表），然后对于B中的每一个字符ch，可以寻找表中比ch大的最小字符（贪心体现）。如果能成功构造则说明A能打破B。

```js
var checkIfCanBreak = function(A, B) {
  return check(A, B) || check(B, A);
};

function check(A, B) {
  const fa = Array.from({ length: 26 }, () => 0);

  for (const ch of A) {
    ++fa[code(ch)];
  }

  for (const ch of B) {
    let i;
    for (i = code(ch); i < 26; ++i) { // 从ch～z放
      if (fa[i] > 0) {
        --fa[i];
        break;
      }
    }
    if (i >= 26) return false;
  }
  return true;
}

function code(ch) {
  return ch.charCodeAt(0) - 'a'.charCodeAt(0);
}
```

## 4、每个人戴不同帽子的方案数

知道是DP，也没做对，遗憾。

首先想到状压DP，但是40顶帽子，2^40也会超时。反过来想想最多10个人，所以压缩的是“人”而不是帽子，于是思路就变成：对每一顶帽子进行分配。这时有两种策略：

1. 分配给喜欢它的人
2. 不分配（将帽子扔掉），但条件是剩余帽子还是够分的

以下是我的代码实现，用的是记忆化搜索（Top-down DP，更容易理解）：

```js
function numberWays(hats) {
  const MOD = 1e9 + 7;
  const n = hats.length;

  // 离散化帽子（压缩到下标0）
  const hatSet = new Set();
  for (const h of hats) {
    for (const i of h) {
      hatSet.add(i);
    }
  }
  const hatList = [...hatSet];
  const H = hatList.length;
  const hatCode = new Map();
  for (const [i, h] of hatList.entries()) {
    hatCode.set(h, i);
  }

  // 不够分
  if (H < n) return 0;

  // 建立反向映射
  const hat2Men = Array.from({ length: H }, () => []); // 帽子索引 => 人数组
  for (const [i, hat] of hats.entries()) {
    for (const h of hat) {
      hat2Men[hatCode.get(h)].push(i);
    }
  }
  const memo = new Map();

  // 当前在帽子hi、已分配情况为cover、已分配mi个人，最终的方案数
  // O(40 * 2^10 * 10) != O(400000)
  function helper(hi, cover, mi) {
    if (mi === n) return 1;

    const key = `${hi}#${cover}#${mi}`;
    if (memo.has(key)) return memo.get(key);

    let res = 0;
    // 策略1：尝试将hi分给每一个喜欢它的人
    for (const man of hat2Men[hi]) {
      if (!(cover & (1 << man))) { // 该人还没帽子，就能给他
        res += helper(hi + 1, cover | (1 << man), mi + 1);
        res %= MOD;
      }
    }
    // 策略2：抛弃hi这顶帽子，不分了
    if (H - 1 - hi >= n - mi) { // 如果剩余帽子还够分配
      res += helper(hi + 1, cover, mi);
    }
    memo.set(key, res);
    return res;
  }

  return helper(0, 0, 0);
};
```