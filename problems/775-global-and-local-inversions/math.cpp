/**
 * 数学归纳法
 * 
 * 时间：`O(N)`, 80ms
 */

class Solution {
public:
    bool isIdealPermutation(vector<int>& A) {
        for (int i = 0; i < A.size(); ++i) {
            if (abs(A[i] - i) > 1) return false;
        }
        return true;
    }
};