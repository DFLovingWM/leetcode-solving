/**
 * 离散化
 */
#include <vector>
#include <map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int minMeetingRooms(vector<vector<int>>& intervals) {
        map<int, int> delta;
        for (auto interval : intervals) {
            ++delta[interval[0]];
            --delta[interval[1]];
        }

        int res = 0;
        int d = 0;
        for (auto p : delta) {
            d += p.second;
            res = max(res, d);
        }
        return res;
    }
};