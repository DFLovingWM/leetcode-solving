var countConsistentStrings = function(allowed, words) {
  const set = new Set(allowed);
  return words.filter(word => (
    Array.from(word).every(ch => (
      set.has(ch)
    ))
  )).length;
};