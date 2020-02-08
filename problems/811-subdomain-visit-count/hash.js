/**
 * 哈希：记录每个域名的频次
 * 
 * 时间：O(NL), 84ms
 */

var subdomainVisits = function (cpdomains) {
  const freq = new Map();
  for (const cpdomain of cpdomains) {
    const [cnt, hostname] = cpdomain.split(' ');
    for (const domain of getAllDomain(hostname)) {
      freq.set(domain, (freq.get(domain) || 0) + Number(cnt));
    }
  }

  const res = [];
  for (const [domain, cnt] of freq) {
    res.push(cnt + ' ' + domain);
  }
  return res;
};

// 输入主机名，解析出所有级域名
function getAllDomain(hostname) {
  const segments = hostname.split('.');
  const res = [];
  let acc = '';
  for (let i = segments.length - 1; i >= 0; --i) {
    acc = segments[i] + (acc.length === 0 ? '' : '.') + acc;
    res.push(acc);
  }
  return res;
}