/**
 * T(N), 96ms
 * S(N), 37.5MB
 */
var singleNumber = function(nums) {
  let set = new Set()
  for (const num of nums) {
    if (set.has(num)) {
      set.delete(num)
    } else {
      set.add(num)
    }
  }
  return set.keys().next().value
};
