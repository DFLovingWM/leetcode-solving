/**
 * Trie树法
 * 
 * 时间：192ms
 * 空间：56.1MB
 */
var replaceWords = function(dict, sentence) {
  const trie = new Trie()
  for (const prefix of dict) {
    trie.insert(prefix)
  }

  const res = []
  for (const word of sentence.split(' ')) {
    res.push(trie.getPrefix(word))
  }
  return res.join(' ')
};

class TrieNode {
  constructor () {
    this.exist = false
    this.nexts = new Map()
  }
}

class Trie {
  constructor () {
    this.root = new TrieNode()
  }

  /**
   * 插入一个前缀
   * @param {string} word 前缀（词根）
   * @returns {void}
   */
  insert (word) {
    let curr = this.root

    for (const ch of word) {
      if (!curr.nexts.has(ch)) {
        curr.nexts.set(ch, new TrieNode())
      }
      curr = curr.nexts.get(ch)
    }

    curr.exist = true
  }

  /**
   * 获取单词的前缀。如果不存在，则返回单词本身
   * @param {string} word 单词
   * @returns {string} 前缀
   */
  getPrefix (word) {
    let curr = this.root
    let prefix = ''

    for (const ch of word) {
      if (!curr.nexts.has(ch)) return word
      prefix += ch
      curr = curr.nexts.get(ch)
      if (curr.exist) return prefix
    }

    return word
  }
}

[
  [
    ["e","k","c","harqp","h","gsafc","vn","lqp","soy","mr","x","iitgm","sb","oo","spj","gwmly","iu","z","f","ha","vds","v","vpx","fir","t","xo","apifm","tlznm","kkv","nxyud","j","qp","omn","zoxp","mutu","i","nxth","dwuer","sadl","pv","w","mding","mubem","xsmwc","vl","farov","twfmq","ljhmr","q","bbzs","kd","kwc","a","buq","sm","yi","nypa","xwz","si","amqx","iy","eb","qvgt","twy","rf","dc","utt","mxjfu","hm","trz","lzh","lref","qbx","fmemr","gil","go","qggh","uud","trnhf","gels","dfdq","qzkx","qxw"],
    "ikkbp miszkays wqjferqoxjwvbieyk gvcfldkiavww vhokchxz dvypwyb bxahfzcfanteibiltins ueebf lqhflvwxksi dco kddxmckhvqifbuzkhstp wc ytzzlm gximjuhzfdjuamhsu gdkbmhpnvy ifvifheoxqlbosfww mengfdydekwttkhbzenk wjhmmyltmeufqvcpcxg hthcuovils ldipovluo aiprogn nusquzpmnogtjkklfhta klxvvlvyh nxzgnrveghc mpppfhzjkbucv cqcft uwmahhqradjtf iaaasabqqzmbcig zcpvpyypsmodtoiif qjuiqtfhzcpnmtk yzfragcextvx ivnvgkaqs iplazv jurtsyh gzixfeugj rnukjgtjpim hscyhgoru aledyrmzwhsz xbahcwfwm hzd ygelddphxnbh rvjxtlqfnlmwdoezh zawfkko iwhkcddxgpqtdrjrcv bbfj mhs nenrqfkbf spfpazr wrkjiwyf cw dtd cqibzmuuhukwylrnld dtaxhddidfwqs bgnnoxgyynol hg dijhrrpnwjlju muzzrrsypzgwvblf zbugltrnyzbg hktdviastoireyiqf qvufxgcixvhrjqtna ipfzhuvgo daee r nlipyfszvxlwqw yoq dewpgtcrzausqwhh qzsaobsghgm ichlpsjlsrwzhbyfhm ksenb bqprarpgnyemzwifqzz oai pnqottd nygesjtlpala qmxixtooxtbrzyorn gyvukjpc s mxhlkdaycskj uvwmerplaibeknltuvd ocnn frotscysdyclrc ckcttaceuuxzcghw pxbd oklwhcppuziixpvihihp"
  ]
].forEach(input => {
  console.log(replaceWords(...input))
})