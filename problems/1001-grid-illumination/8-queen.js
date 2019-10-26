/**
 * [280ms, 99MB]
 * Refer to: https://leetcode.com/problems/grid-illumination/discuss/242898/C%2B%2B-with-picture-similar-to-N-Queens
 */
function gridIllumination (N, lamps, queries) {
  let row = new Map1(),
      col = new Map1(),
      diag2Left = new Map1(),
      diag2Right = new Map1()
  let isLight = new Map2()
  let answers = []
  
  // Initial lamps.
  for (const [x, y] of lamps) {
    row.set(x, row.get(x, 0) + 1)
    col.set(y, col.get(y, 0) + 1)
    diag2Left.set(x + y, diag2Left.get(x + y, 0) + 1)
    diag2Right.set(x - y, diag2Right.get(x - y, 0) + 1)
    isLight.set(x, y, true)
  }

  for (const [xQ, yQ] of queries) {
    if (row.get(xQ, 0) > 0 || col.get(yQ, 0) > 0 || diag2Left.get(xQ + yQ, 0) > 0 || diag2Right.get(xQ - yQ, 0) > 0) { // If the cell is illuminated (yet maybe no lamp here)
      answers.push(1)

      // Turn off lamps at 9 positions centering [xQ, yQ].
      for (let x = xQ - 1; x <= xQ + 1; ++x) {
        for (let y = yQ - 1; y <= yQ + 1; ++y) {
          if ((x >= 0 && x < N) && (y >= 0 && y < N) && isLight.get(x, y)) { // If there's a lamp in this cell, then turn it off.
            row.set(x, row.get(x, 0) - 1)
            col.set(y, col.get(y, 0) - 1)
            diag2Left.set(x + y, diag2Left.get(x + y, 0) - 1)
            diag2Right.set(x - y, diag2Right.get(x - y, 0) - 1)
            isLight.set(x, y, false)
          }
        }
      }
    } else {
      answers.push(0)
    }
  }

  return answers
}

class Map1 {
  constructor () {
    this.map = new Map()
  }

  get (x, defaultVal) {
    return this.map.get(x) || defaultVal
  }

  set (x, newVal) {
    return this.map.set(x, newVal)
  }
}

class Map2 {
  constructor () {
    this.map = new Map()
  }

  _invariant (x, y) {
    if (!this.map.has(x)) {
      this.map.set(x, new Map())
    }
  }

  get (x, y, defaultVal) {
    this._invariant(x, y)
    return this.map.get(x).get(y) || defaultVal
  }

  set (x, y, newVal) {
    this._invariant(x, y)
    return this.map.get(x).set(y, newVal)
  }
}

// [
//   [5, [[0,0],[4,4]], [[1,1],[1,0]]]
// ].forEach(input => {
//   console.log(gridIllumination(...input))
// })