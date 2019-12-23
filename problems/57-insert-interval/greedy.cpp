/**
 * 就是个合并区间：将新区间(二分)插入到有序位置上，然后合并区间
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<vector<int>> insert(vector<vector<int>>& intervals, vector<int>& newInterval) {
        vector<vector<int>> res;
        // 没有区间，就返回新区间
        if (intervals.size() == 0) {
            res.push_back(newInterval);
            return res;
        }

        // 二分查找插入位置
        auto it = lower_bound(intervals.begin(), intervals.end(), newInterval, [&](const vector<int> &A, const vector<int> &B) {
            return A[0] <= B[0];
        });
        // 插入新区间
        intervals.insert(it, newInterval);

        // 合并区间
        vector<int> prev = { intervals[0][0], intervals[0][1] };
        for (int i = 1; i < intervals.size(); ++i) {
            if (intervals[i][0] > prev[1]) {
                res.push_back(prev);
                prev = { intervals[i][0], intervals[i][1] };
            } else {
                prev[1] = max(prev[1], intervals[i][1]);
            }
        }
        res.push_back(prev);

        return res;
    }
};