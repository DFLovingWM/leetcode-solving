/**
 * @param {string[]} words
 */
var StreamChecker = function(words) {
  this.words = words
  this.q = ''
};

/** 
 * @param {character} letter
 * @return {boolean}
 */
StreamChecker.prototype.query = function(letter) {
  this.q += letter
  return this.words.some(word => this.q.endsWith(word))
};

var streamChecker = new StreamChecker(['cd', 'f', 'kl'])
'abcdefghijkl'.split('')
.forEach(letter => {
  console.log(streamChecker.query(letter))
})