/**
 * @param {string} expression
 * @return {string[]}
 */
var braceExpansionII = function(expression) {
  return getArray(expression)
};

// 递归函数
function getArray (expression) {
  let collections = []
  //.
}

let single = /^[a-z]+$/
let combine = /^(\{.+?\})+$/
let elementRE = /^([a-z]|\{.+?\})+$/

function splitArray (exp) {
  let re = /^\{(\d+)(,(\d+))+\}$/g
  let matchItems = []
  let matchItem
  while ((matchItem = re.exec(exp)) !== null) {
    matchItems.push(matchItem)
  }
  return matchItems
}


// console.log(splitArray('{{a,z},a{b,c},{ab,z}}'))
console.log(splitArray('{1,2,3,4,5}'))