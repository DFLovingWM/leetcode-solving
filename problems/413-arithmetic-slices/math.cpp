/**
 * 数学：计算每一段等差子数组的个数（用求和公式），累加即可
 * 
 * 时间：`O(N)`, 8ms
 */

class Solution {
public:
    int numberOfArithmeticSlices(vector<int>& A) {
        int res = 0;
        int acc = 0, d;

        // 找连续的等差子数组
        for (int i = 2; i < A.size(); ++i) { // 技巧：这里从2开始
            if (A[i] - A[i-1] == A[i-1] - A[i-2]) { // 可连续
                ++acc;
            } else {
                res += acc * (acc + 1) / 2; // 求和公式
                acc = 0;
            }
        }
        // 最后一次
        res += acc * (acc + 1) / 2;

        return res;
    }
};