/**
 * 优化：最小值预处理
 * 
 * 时间：`O(N)`, 52ms
 */

class Solution {
public:
    bool isIdealPermutation(vector<int>& A) {
        const int n = A.size();

        // 预处理：右边的最小值
        vector<int> rightMin(n, 0);
        rightMin[n - 1] = A[n - 1];
        for (int i = n - 2; i >= 0; --i) {
            rightMin[i] = min(A[i], rightMin[i + 1]);
        }

        for (int i = 0; i < n - 2; ++i) {
            // 说明全局比局部多了，直接失败
            // 只需要找到右边最小的A[j]
            if (A[i] > rightMin[i + 2]) {
                return false;
            }
        }
        return true;
    }
};