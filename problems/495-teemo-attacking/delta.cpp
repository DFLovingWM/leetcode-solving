/**
 * 离散化：`O(NlogN)`
 */

#include <vector>
#include <map>
#include <algorithm>
using namespace std;

class Solution {
public:
    int findPoisonedDuration(vector<int>& timeSeries, int duration) {
        map<int, int> delta;
        for (int start : timeSeries) {
            ++delta[start];
            --delta[start + duration];
        }

        int res = 0;
        int d = 0;
        int prev = -1;
        for (auto p : delta) {
            int curr = p.first;
            if (d > 0) res += curr - prev; // 流血
            prev = curr;
            d += p.second;
        }
        return res;
    }
};