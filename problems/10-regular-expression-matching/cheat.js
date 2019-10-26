/**
 * Cheat
 */
var isMatch = function(s, p) {
  return new RegExp(`^${p}$`).test(s)
};

module.exports = isMatch