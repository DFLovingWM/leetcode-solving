/**
 * 双指针，线性遍历
 * 
 * 时间：`O(N)`, 52ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> intervalIntersection(vector<vector<int>>& A, vector<vector<int>>& B) {
        vector<vector<int>> res;
        int i = 0, j = 0;

        while (i < A.size() && j < B.size()) {
            vector<int> &a = A[i], &b = B[j];

            int start = max(a[0], b[0]);
            int end = min(a[1], b[1]);
            if (start <= end) { // 相交，则将相交部分加入结果集
                res.push_back({ start, end });
            }

            // 更“慢”的，前进一步
            if (a[1] <= b[1]) {
                ++i;
            } else {
                ++j;
            }
        }

        return res;
    }
};