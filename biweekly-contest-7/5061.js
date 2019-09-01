var FileSystem = function() {
  this.map = new Map()
};

/** 
 * @param {string} path 
 * @param {number} value
 * @return {boolean}
 */
FileSystem.prototype.create = function(path, value) {
  const segments = path.match(/\/[a-z]+/g)

  let dir = ''
  for (let i = 0; i < segments.length - 1; ++i) {
    dir += segments[i]
    if (!this.map.has(dir)) {
      return false
    }
  }

  this.map.set(path, value)
  return true
};

/** 
 * @param {string} path
 * @return {number}
 */
FileSystem.prototype.get = function(path) {
  return this.map.get(path) || -1
};

