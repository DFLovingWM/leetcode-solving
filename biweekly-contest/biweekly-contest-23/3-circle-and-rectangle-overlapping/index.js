const checkOverlap = require('./naive');

[
  [1,0,0,1,-1,3,1],
  [1,0,0,-1,0,0,1],
  [1,1,1,-3,-3,3,3],
  [1,1,1,1,-3,2,-1],
].forEach(A=> {
  console.log(checkOverlap(...A));
})