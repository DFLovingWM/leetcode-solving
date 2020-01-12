/**
 * Top-down
 * 时间：`O(N^3)`，12ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    int minScoreTriangulation(vector<int>& A) {
        arr = A;
        const int n = arr.size();
        cache = vector<vector<int>>(n, vector<int>(n, -1));
        return helper(0, n - 1);
    }

    int helper(int left, int right) {
        if (right - left + 1 == 2) return 0; // 只有两个点
        if (cache[left][right] != -1) return cache[left][right];

        int res = INT_MAX;
        for (int i = left + 1; i < right; ++i) { // 遍历中间点
            int curr = arr[left] * arr[i] * arr[right] + // 切出来一个三角形
                helper(left, i) + // 左边
                helper(i, right); // 右边
            res = min(res, curr);
        }
        return cache[left][right] = res;
    }

private:
    vector<int> arr;
    vector<vector<int>> cache;
};