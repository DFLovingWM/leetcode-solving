/**
 * 位运算：每次比较最低位
 * 
 * 时间：`O(logN)`, 4ms
 */

class Solution {
public:
    int hammingDistance(int x, int y) {
        int res = 0;
        while (x || y) {
            if ((x & 1) != (y & 1)) { // 如果最低位不同，就加1
                ++res;
            }
            x >>= 1;
            y >>= 1;
        }
        return res;
    }
};