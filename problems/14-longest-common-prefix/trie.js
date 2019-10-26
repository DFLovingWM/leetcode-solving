/**
 * trie结点
 */
class TrieTreeNode {
  constructor (next = {}, weight = 0) {
    this.next = next
    this.weight = weight
  }

  /**
   * 获取所有出度字符
   */
  getNextChars () {
    return Object.keys(this.next)
  }

  /**
   * 判断目标字符是否在出度字符列表中
   * @param {String} char 目标字符
   */
  hasAsNext (char) {
    return this.next.hasOwnProperty(char)
  }
}


/**
 * 从某个结点开始DFS
 * @param {TrieTreeNode} node DFS起点
 * @param {Array<String>} strList 遍历得到的字符串列表
 * @param {String} str 当前字符串
 */
function dfs (node, strList, str = '') {
  if (node.weight > 0) {
    strList.push(str)
  }
  for (const key of node.getNextChars()) {
    dfs(node.next[key], strList, str + key)
  }
}


/**
 * trie树
 */
class TrieTree {
  constructor () {
    this.root = new TrieTreeNode()
  }

  /**
   * 增加一个字符串
   * @param {String} word 目标字符串
   */
  add (word) {
    let p = this.root
    for (let i = 0; i < word.length; ++i) {
      let char = word[i]
      if (!p.hasAsNext(char)) {
        p.next[char] = new TrieTreeNode()
      }
      p = p.next[char]
    }
    ++p.weight
  }

  /**
   * 判断是否含有某个字符串
   * @param {String} word 目标字符串
   * @returns {Boolean} 字典中是否含有该字符串
   */
  has (word) {
    return this.count(word) > 0
  }

  /**
   * 获取某个字符串的个数
   * @param {String} word 目标字符串
   */
  count (word) {
    let p = this.root
    for (const char of word) {
      if (!p.hasAsNext(char)) {
        // 匹配失败
        return 0
      }
      p = p.next[char]
    }
    return p.weight
  }

  /**
   * 获取所有以某个前缀开头的字符串
   * 1. 找到前缀所在的子root
   * 2. 使用DFS
   * @param {String} prefix 前缀
   * @returns {Array<String>} 字典中所有字符串
   */
  getAll (prefix = '') {
    let startNode = this.root
    const words = []
    for (const char of prefix) {
      if (!startNode.hasAsNext(char)) {
        return []
      }
      startNode = startNode.next[char]
    }

    dfs(startNode, words, prefix)

    return words
  }

  /**
   * 获取最长公共前缀
   * @returns {String} 最长公共前缀
   */
  getLongestCommonPrefix () {
    let result = ''

    let node = this.root
    while (true) {
      if (node.weight > 0) {
        // 如果是一个单词，就不用继续找了，就是它
        break
      }

      let nextChars = node.getNextChars()
      if (nextChars.length !== 1) {
        // 如果出度字符有多个/0个，可以停止了
        break
      }

      result += nextChars[0]
      node = node.next[ nextChars[0] ]
    }

    return result
  }

  /**
   * 用字符画出当前trie树
   */
  render () {
    console.error('N叉树你叫我咋画(T_T')
  }
}

const longestCommonPrefix = function (strs) {
  const tree = new TrieTree()
  for (const str of strs) {
    tree.add(str)
  }
  return tree.getLongestCommonPrefix()
}

exports.longestCommonPrefix = longestCommonPrefix
