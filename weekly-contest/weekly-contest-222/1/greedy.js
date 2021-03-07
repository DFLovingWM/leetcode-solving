/**
 * 贪心
 */
var maximumUnits = function(boxTypes, truckSize) {
  boxTypes.sort((A, B) => (
    B[1] - A[1]
  ));
  let res = 0;
  for (let i = 0; i < boxTypes.length; ++i) {
    const [count, value] = boxTypes[i];
    if (truckSize >= count) {
      truckSize -= count;
      res += count * value;
    } else {
      res += truckSize * value;
      break;
    }
  }
  return res;
};