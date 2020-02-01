/**
 * 暴力：`O(N^2)`, TLE
 */

class Solution {
public:
    bool isIdealPermutation(vector<int>& A) {
        const int n = A.size();
        for (int i = 0; i < n - 2; ++i) {
            for (int j = i + 2; j < n; ++j) {
                if (A[i] > A[j]) { // 说明全局比局部多了，直接失败
                    return false;
                }
            }
        }
        return true;
    }
};