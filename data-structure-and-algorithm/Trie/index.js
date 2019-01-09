const Trie = require('./trie')
const trieTree = new Trie()

trieTree.add('apple')
trieTree.add('app')
trieTree.add('banana')
trieTree.add('app')
trieTree.add('applet')
trieTree.add('app')

console.log( trieTree.getAll() )
console.log( trieTree.getAll('appl') )