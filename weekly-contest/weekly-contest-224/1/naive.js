/**
 * Map
 */
var countGoodRectangles = function(rectangles) {
  const freq = new Map();
  for (const [l, w] of rectangles) {
    const x = Math.min(l, w);
    freq.set(x, (freq.get(x) || 0) + 1);
  }

  const k = Math.max(...freq.keys());
  return freq.get(k);
};