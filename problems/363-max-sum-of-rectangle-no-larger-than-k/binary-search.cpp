/**
 * 二分查找
 * 
 * 时间：`O(N^2 * MlogM)`, 468ms
 */

#include <vector>
#include <set>
using namespace std;

class Solution {
public:
    // 二维，O(N^2 * MlogM)
    int maxSumSubmatrix(vector<vector<int>>& matrix, int k) {
        const int M = matrix.size(), N = matrix[0].size();
        int res = INT_MIN;
        for (int colStart = 0; colStart < N; ++colStart) {
            vector<int> arr(M, 0);
            for (int j = colStart; j < N; ++j) {
                for (int i = 0; i < M; ++i) {
                    arr[i] += matrix[i][j];
                }
                int tmp = maxSumSubarray(arr, k);
                res = max(res, tmp);
            }
        }
        return res;
    }

    // 一维，O(NlogN)
    int maxSumSubarray (vector<int> &array, int k) {
        int acc = 0;
        set<int> prefix = { acc };
        int res = INT_MIN;
        for (int n : array) {
            acc += n;
            auto it = prefix.lower_bound(acc - k);
            if (it != prefix.end()) {
                res = max(res, acc - *it);
            }
            prefix.insert(acc);
        }
        return res;
    }
};