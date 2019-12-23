#include <vector>
#include <map>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool canAttendMeetings(vector<vector<int>>& intervals) {
        // 将所有开始、结束结点离散化
        map<int, int> delta;
        for (auto interval : intervals) {
            int start = interval[0];
            int end = interval[1];
            ++delta[start]; // 开始一场会议，所以是+1
            --delta[end]; // 结束一场会议，所以是-1
        }

        // 一次遍历
        int d = 0; // 表示当前有多少场会议同时进行
        for (auto p : delta) {
            d += p.second;
            if (d > 1) { // 只要有超过1场会议在同时进行，那么就无法参加完
                return false;
            }
        }
        return true;
    }
};