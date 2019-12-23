/**
 * 双指针，线性遍历
 * 
 * 时间：`O(N)`, 48ms
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

            // 分类讨论：比较右边界
            if (a[1] <= b[1]) { // 因为a更快结束，所以待会a前进
                if (a[1] >= b[0]) { // 相交
                    res.push_back({ max(a[0], b[0]), min(a[1], b[1]) });
                }
                ++i;
            } else { // 同理，因为b更快结束，所以待会b前进
                if (a[0] <= b[1]) { // 相交
                    res.push_back({ max(a[0], b[0]), min(a[1], b[1]) });
                }
                ++j;
            }
        }

        return res;
    }
};