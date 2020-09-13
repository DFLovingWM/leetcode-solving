/**
 * 预处理
 */
var numTriplets = function(A, B) {
  const [sa, da] = process(A);
  const [sb, db] = process(B);
  let res = 0;

  for (const [product, count] of sa) {
    if (db.has(product)) {
      res += count * db.get(product);
    }
  }
  
  for (const [product, count] of da) {
    if (sb.has(product)) {
      res += count * sb.get(product);
    }
  }

  return res;
};

function process(arr) {
  const single = new Map();
  for (const n of arr) {
    const m = n * n;
    single.set(m, (single.get(m) || 0) + 1);
  }

  const double = new Map();
  for (let i = 0; i < arr.length; ++i) {
    for (let j = i + 1; j < arr.length; ++j) {
      const m = arr[i] * arr[j];
      double.set(m, (double.get(m) || 0) + 1);
    }
  }

  return [single, double];
}
