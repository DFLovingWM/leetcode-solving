class Solution {
public:
    int maxEvents(vector<vector<int>>& events) {
        map<int, multiset<int>> getRights;
        int minVal = INT_MAX, maxVal = INT_MIN;
        for (auto &event : events) {
            int s = event[0], e = event[1];
            getRights[s].insert(e);
            minVal = min(minVal, s);
            minVal = min(minVal, e);
            maxVal = max(maxVal, s);
            maxVal = max(maxVal, e);
        }

        int res = 0;
        for (int x = minVal; x <= maxVal; ++x) {
            auto iterLeft = getRights.upper_bound(x); // left <= x，但尽可能大
            if (iterLeft == getRights.begin()) continue;
            --iterLeft;

            int left = iterLeft->first;
            auto &rights = iterLeft->second;
            auto iterRight = rights.lower_bound(x); // right >= x，但尽可能小
            if (iterRight == rights.end()) continue;

            rights.erase(iterRight);
            if (rights.size() == 0) {
                getRights.erase(left);
            }
            ++res;
        }

        return res;
    }
};