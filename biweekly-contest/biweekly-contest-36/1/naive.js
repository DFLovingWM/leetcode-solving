/**
 * @param {number} big
 * @param {number} medium
 * @param {number} small
 */
var ParkingSystem = function(big, medium, small) {
  this.arr = Array.from({ length: 3 }, () => 0);
  this.arr[0] = big;
  this.arr[1] = medium;
  this.arr[2] = small;
};

/** 
 * @param {number} carType
 * @return {boolean}
 */
ParkingSystem.prototype.addCar = function(carType) {
  if (this.arr[carType - 1] === 0) return false;
  --this.arr[carType - 1];
  return true;
};

/**
 * Your ParkingSystem object will be instantiated and called as such:
 * var obj = new ParkingSystem(big, medium, small)
 * var param_1 = obj.addCar(carType)
 */