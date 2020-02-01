/**
 * 枚举：
 * 
 * 时间：`O(8N) = O(N)`, 64ms
 */

class Solution {
public:
    int maxAbsValExpr(vector<int>& A, vector<int>& B) {
        const int n = A.size();
        int res = INT_MIN;

        for (int a : {-1, 1}) {
            for (int b : {-1, 1}) {
                for (int c : {-1, 1}) {
                    int maxVal = INT_MIN;
                    for (int i = 0; i < n; ++i) {
                        if (maxVal != INT_MIN) {
                            res = max(res, a * A[i] + b * B[i] + c * i + maxVal);
                        }
                        maxVal = max(maxVal, - a * A[i] - b * B[i] - c * i);
                    }
                }
            }
        }

        return res;
    }
};