function spellchecker (wordlist, queries) {
  const results = []
  const stages = [exact, capital, vowel, last]
  const cache = {}

  for (const query of queries) {
    if (cache.hasOwnProperty(query)) return cache[query]

    let result
    for (const stage of stages) {
      result = stage(wordlist, query)
      if (result !== false) {
        results.push(cache[query] = result)
        break
      }
    }
  }

  return results
}

function exact (wordlist, query) {
  if (wordlist.includes(query)) {
    return query
  }
  return false
}

function capital (wordlist, query) {
  for (const word of wordlist) {
    if (word.toLowerCase() === query.toLowerCase()) {
      return word
    }
  }
  return false
}

function vowel (wordlist, query) {
  for (const word of wordlist) {
    if (word.length === query.length) {
      const match = [...word].every((char, i) => {
        return (isVowel(word[i]) && isVowel(query[i])) ||
          (!isVowel(word[i]) && !isVowel(query[i]) && word[i].toLowerCase() === query[i].toLowerCase())
      })
      if (match) {
        return word
      }
    }
  }
  return false
}

function last (wordlist, query) {
  return ''
}

function isVowel (letter) {
  return letter.length === 1 && 'aeiou'.includes(letter.toLowerCase())
}

spellchecker(["KiTe","kite","hare","Hare"], ["kite","Kite","KiTe","Hare","HARE","Hear","hear","keti","keet","keto"])