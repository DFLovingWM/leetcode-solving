/**
 * 线性查找
 * 
 * 时间：`O(N)`, 16ms
 */

class Solution {
public:
    int peakIndexInMountainArray(vector<int>& A) {
        int i;
        for (i = 1; i + 1 < A.size(); ++i) {
            if (A[i] > A[i - 1] && A[i] > A[i + 1]) {
                break;
            }
        }
        return i;
    }
};