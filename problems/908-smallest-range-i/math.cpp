/**
 * 找最大值、最小值
 * 
 * 时间：O(N), 16ms
 */

class Solution {
public:
    int smallestRangeI(vector<int>& A, int K) {
        int maxn = INT_MIN, minn = INT_MAX;
        for (int n : A) {
            maxn = max(maxn, n);
            minn = min(minn, n);
        }
        return max(maxn - minn - 2 * K, 0);
    }
};