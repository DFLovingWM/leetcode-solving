#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> merge(vector<vector<int>>& intervals) {
        const int n = intervals.size();
        if (n == 0) return {};

        // 排序：start小的优先
        sort(intervals.begin(), intervals.end(), [&](vector<int> &A, vector<int> &B) {
            return A[0] < B[0];
        });

        vector<vector<int>> res;
        vector<int> prev = intervals[0];

        // 只需要检查相邻的区间
        for (int i = 1; i < n; ++i) {
            vector<int> curr = intervals[i];

            if (curr[0] <= prev[1]) { // 相交 => 合并，即扩展右边界
                prev[1] = max(prev[1], curr[1]);
            } else { // 不相交 => 将上一个合并完成的加入结果集，并重置
                res.push_back(prev);
                prev = curr;
            }
        }

        // 最后一个
        res.push_back(prev);

        return res;
    }
};