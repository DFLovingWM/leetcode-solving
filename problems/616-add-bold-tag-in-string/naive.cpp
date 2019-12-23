/**
 * 合并区间的思路
 * 
 * 时间：感觉复杂度挺高, 24ms
 */

#include <string>
#include <vector>
#include <algorithm>
using namespace std;

typedef unsigned long ul;

class Solution {
public:
    string addBoldTag(string str, vector<string>& patterns) {
        vector<vector<ul>> intervals;
        for (string pattern : patterns) {
            ul start = 0;
            while ((start = str.find(pattern, start)) != string::npos) {
                intervals.push_back({ start, start + pattern.size() });
                ++start;
            }
        }
        // 没有加粗的区间，提前退出
        if (intervals.size() == 0) return str;
        
        // 区间排序：start小的优先
        sort(intervals.begin(), intervals.end(), [&](vector<ul> &A, vector<ul> &B) {
            return A[0] < B[0];
        });

        // 合并，同时输出
        string res;
        vector<ul> prev = { intervals[0][0], intervals[0][1] };
        // 头
        res += str.substr(0, intervals[0][0]);
        for (int i = 1; i < intervals.size(); ++i) {
            if (intervals[i][0] <= prev[1]) { // 能拼接
                prev[1] = max(prev[1], intervals[i][1]);
            } else {
                res += "<b>" + str.substr(prev[0], prev[1] - prev[0]) + "</b>"; // 加粗
                res += str.substr(prev[1], intervals[i][0] - prev[1]); // 非加粗
                prev = { intervals[i][0], intervals[i][1] };
            }
        }
        // 尾
        res += "<b>" + str.substr(prev[0], prev[1] - prev[0]) + "</b>"; // 加粗
        res += str.substr(prev[1]); // 非加粗

        return res;
    }
};