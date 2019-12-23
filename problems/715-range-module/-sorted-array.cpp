/**
 * 维护不相交区间数组
 * 
 * 查询 > 增删
 */

#include <vector>
#include <algorithm>
using namespace std;

class RangeModule {
public:
    // O(1)
    RangeModule() {}
    
    // O(N)
    void addRange(int left, int right) {
        vector<int> newInterval = {left, right};
        if (intervals.size() == 0) {
            intervals.push_back(newInterval);
            return;
        }

        // 二分查找插入位置
        auto it = upper_bound(intervals.begin(), intervals.end(), newInterval, [&](const vector<int> &newItem, const vector<int> &item) {
            return newItem[0] < item[0];
        });
        // 插入
        intervals.insert(it, newInterval);
        // 合并重叠区间
        vector<vector<int>> res;
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
        intervals = res;
    }
    
    // O(N)
    void removeRange(int left, int right) {
        vector<vector<int>> res;
        for (auto interval : intervals) {
            if (interval[1] <= left || interval[0] >= right) { // 相离
                res.push_back(interval);
            } else { // 相交
                // 左剩余
                if (interval[0] < left && left < interval[1]) {
                    res.push_back({ interval[0], left });
                }
                // 右剩余
                if (interval[0] < right && right < interval[1]) {
                    res.push_back({ right, interval[1] });
                }
            }
        }
        intervals = res;
    }

    // O(logN)
    bool queryRange(int left, int right) {
        auto it = upper_bound(intervals.begin(), intervals.end(), left, [&](const int &val, const vector<int> &item) {
            return val < item[0]; // 往左走
        });
        int i = it - intervals.begin() - 1;
        return i >= 0 && intervals[i][1] >= right;
    }

private:
    vector<vector<int>> intervals;
};