/**
 * 数学/枚举
 * 
 * 时间：`O(N)`, 52ms
 */

class Solution {
public:
    int maxValueAfterReverse(vector<int>& A) {
        const int n = A.size();
        int sum = 0;
        for (int i = 1; i < n; ++i) {
            sum += abs(A[i] - A[i - 1]);
        }
        int res = sum;

        // 边界情况
        for (int i = 0; i < n - 1; ++i) {
            int x = A[i], y = A[i + 1];
            res = max(res, sum - abs(x - y) + abs(A[0] - y)); // [A(0), x]
            res = max(res, sum - abs(x - y) + abs(A[n - 1] - x)); // [y, A(n-1)]
        }
        
        // 一般情况
        for (int a : {-1, 1}) {
            for (int b : {-1, 1}) {
                int maxVal = INT_MIN; // 在i之前的最大值
                for (int i = 0; i < n - 1; ++i) {
                    int x = A[i], y = A[i + 1];
                    int curr = sum + a * y + b * x - abs(x - y) + maxVal; // 关键
                    res = max(res, curr); // 更新答案
                    maxVal = max(maxVal, 0 - a * y - b * x - abs(x - y)); // 维护i之前的最大值
                }
            }
        }

        return res;
    }
};