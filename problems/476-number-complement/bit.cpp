/**
 * 位运算：`位 XOR 1`相当于取反
 * 
 * 时间：`O(logN)`, 0ms
 */

class Solution {
public:
    int findComplement(int num) {
        int allOne = 0; // 构造一个位数相同的全1二进制数（用以XOR）
        for (int n = num; n; n >>= 1) {
            allOne = (allOne << 1) ^ 1;
        }
        return num ^ allOne;
    }
};