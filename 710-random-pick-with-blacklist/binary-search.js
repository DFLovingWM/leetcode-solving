/**
 * 二分查找：
 * 假设白名单数量为N，抽取一个[0, N)的随机数，然后
 */

var Solution = function (N, blacklist) {
  this.n = N
  this.blackSet = new Set(blacklist)
};

Solution.prototype.pick = function () {

};

module.exports = Solution