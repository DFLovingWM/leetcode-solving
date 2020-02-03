/**
 * 斐蜀定理
 * 
 * 时间：`O(logN)`, 0ms
 */

class Solution {
public:
    bool canMeasureWater(int x, int y, int z) {
        if (z > x + y) return false;
        if (z == x + y) return true;
        return z % gcd(x, y) == 0;
    }

    int gcd(int x, int y) {
        if (y == 0) return x;
        return gcd(y, x % y);
    }
};