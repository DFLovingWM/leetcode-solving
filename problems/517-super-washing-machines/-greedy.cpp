/**
 * 贪心
 */

#include <vector>
#include <set>
using namespace std;

class Solution {
public:
    int findMinMoves(vector<int>& machines) {
        int sum = 0;
        for (int n : machines) {
            sum += n;
        }
        if (sum % machines.size() != 0) return -1; // 无法平均分配 => 失败

        multiset<int> arr(machines.begin(), machines.end());
        int res = 0;
        while (true) {
            auto minIt = arr.begin();
            auto maxIt = arr.end();
            --maxIt;
            int minVal = *minIt, maxVal = *maxIt;
            if (minVal == maxVal) break;
            arr.erase(minIt); arr.insert(minVal + 1);
            arr.erase(maxIt); arr.insert(maxVal - 1);
            ++res;
        }
        return res;
    }
};