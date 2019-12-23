#include <vector>
#include <map>
#include <algorithm>
using namespace std;

class Solution {
public:
    bool carPooling(vector<vector<int>>& trips, int capacity) {
        map<int, int> delta;
        for (auto trip : trips) {
            int n = trip[0];
            int start = trip[1];
            int end = trip[2];
            delta[start] += n;
            delta[end] -= n;
        }

        int d = 0;
        int maxNeed = 0; // 最多需要的座位
        for (auto p : delta) {
            d += p.second;
            maxNeed = max(maxNeed, d);
            if (maxNeed > capacity) {
                return false;
            }
        }
        return true;
    }
};