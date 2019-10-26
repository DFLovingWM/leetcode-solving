/**
 * Like sorting approach(but no need to sort), there's only 2 possible maximum product, so scan once and find them.
 * 
 * Time: O(N), 92ms
 * Space: O(1), 20.2MB
 */
function maximumProduct (nums) {
  let min1 = Infinity, min2 = Infinity
  let max3 = -Infinity, max2 = -Infinity, max1 = -Infinity

  for (const n of nums) {
    if (n < min1) { // Smallest => Replace min[1~2]
      [min1, min2] = [n, min1];
    } else if (n < min2) { // Second smallest => Just replace [min2]
      min2 = n
    }

    if (n >= max1) { // Biggest => Replace max[3~1]
      [max3, max2, max1] = [max2, max1, n]
    } else if (n >= max2) { // Second biggest => Replace max[3~2]
      [max3, max2] = [max2, n]
    } else if (n > max3) { // Third biggest => Just replace max3
      max3 = n
    }
  }

  // console.log(min1, min2, max3, max2, max1)

  return Math.max(
    min1 * min2 * max1,
    max3 * max2 * max1
  )
}

module.exports = maximumProduct