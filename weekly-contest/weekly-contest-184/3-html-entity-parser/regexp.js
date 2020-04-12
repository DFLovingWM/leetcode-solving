/**
 * 正则替换
 */
var entityParser = function (s) {
  const MAPPING = [
    ['&quot;', '"'],
    ['&apos;', '\''],
    ['&amp;', '&'],
    ['&gt;', '>'],
    ['&lt;', '<'],
    ['&frasl;', '/']
  ];
  for (const [from, to] of MAPPING) {
    s = s.replace(new RegExp(from, 'g'), to);
  }
  return s;
};

[
  "&amp; is an HTML entity but &ambassador; is not.",
  "and I quote: &quot;...&quot;",
  "Stay home! Practice on Leetcode :)",
  "x &gt; y &amp;&amp; x &lt; y is always false",
  "leetcode.com&frasl;problemset&frasl;all",
].forEach(s => {
  console.log(entityParser(s));
})