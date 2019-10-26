/**
 * @param {string} address
 * @return {string}
 */
var defangIPaddr = function(address) {
  return address.replace(/\./g, '[.]')
};

[
  '1.1.1.1',
  '255.100.50.0'
].forEach(input => {
  console.log(defangIPaddr(input))
})