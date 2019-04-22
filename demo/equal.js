/**
 * 题目1：
 * 判断两个对象是否等价(类似浅拷贝)
 */
function equalObject (A, B) {
  if (getType(A) !== 'Object' || getType(B) !== 'Object') { // 防止非纯对象调用，比如数组
    return false
  }

  let [aKeys, bKeys] = [Reflect.ownKeys(A), Reflect.ownKeys(B)]
  if (aKeys.length !== bKeys.length) { // 如果key数目不同 => 不等价
    return false
  }

  for (const key of aKeys) {
    if (!B.hasOwnProperty(key)) { // A中存在B没有的key => 不等价
      return false
    }
    if (A[key] !== B[key]) { // 题目要求：只需原生相等
      return false
    }
  }

  return true
}

/**
 * 题目2：
 * 判断两个数组是否等价(类似浅拷贝)
 */
function equalArray (A, B) {
  if (!Array.isArray(A) || !Array.isArray(B)) { // 防止非数组对象调用，比如“类数组对象”
    return false
  }
  if (A.length !== B.length) { // 长度不同 => 不等价
    return false
  }

  for (let i = 0; i < A.length; ++i) {
    if ( // 考虑空slot的情况（否则空slot与undefined全等了）
      (A.hasOwnProperty(i) && !B.hasOwnProperty(i)) ||
      (!A.hasOwnProperty(i) && B.hasOwnProperty(i))
    ) {
      return false
    }

    if (A[i] !== B[i]) {
      return false
    }
  }

  return true
}

/**
 * 题目3：
 * [递归法]判断对象/数组是否深度等价(类似于assert中的deepEqual)
 * @param {Object | Array} A
 * @param {Object | Array} B
 * @param {Array} aList 存储比较过的A对象
 * @param {Array} bList 存储比较过的B对象
 * @returns {boolean} 是否深度等价
 */
function equal (A, B, aList = [], bList = []) {
  let [aType, bType] = [getType(A), getType(B)]
  if (aType !== bType) { // 类型不相同，则说明这一层不等价
    return false
  }
  if (!['Object', 'Array'].includes(aType)) { // 如果不是纯对象/数组类型，则直接比较引用（偷懒，其实这里还可以扩展，比如Date类型啥的）
    return A === B
  }

  /*
   * 避免递归爆栈的关键：
   * 如果aList、bList存在(A,B)这一对，说明：A与B是“暂时”等价的，
   * 可以直接返回。
   */
  let hasCompared = aList.some((a, index) => {
    return a === A && bList[index] === B
  })
  if (hasCompared) {
    return true
  }

  aList.push(A)
  bList.push(B)

  let result = true
  if (aType === 'Object') { // 如果是对象类型...
    let [aKeys, bKeys] = [Reflect.ownKeys(A), Reflect.ownKeys(B)]
    if (aKeys.length !== bKeys.length) {
      result = false
    }
    if (result) {
      for (const key of aKeys) {
        if (
          !B.hasOwnProperty(key) || // 如果B没有这个key，则不等价
          !equal(A[key], B[key], aList, bList) // 关键：递归地 检查是否等价
        ) {
          result = false
          break
        }
      }
    }
  } else if (aType === 'Array') { // 如果是数组类型...
    if (A.length !== B.length) {
      result = false
    }
    if (result) {
      for (let i = 0; i < A.length; ++i) {
        if (
          ((A.hasOwnProperty(i) && !B.hasOwnProperty(i)) || (!A.hasOwnProperty(i) && B.hasOwnProperty(i))) || // 如果存在一个key，使得A有B无或相反，则二者不等价
          (!equal(A[i], B[i], aList, bList)) // 同理，递归
        ) {
          result = false
          break
        }
      }
    }
  }

  aList.pop()
  bList.pop()

  return result
}

// 获取变量/对象的类型
function getType (x) {
  let tmp = Object.prototype.toString.call(x)
  return tmp.slice(8, tmp.length - 1)
}

module.exports = {
  equalObject,
  equalArray,
  equal
}