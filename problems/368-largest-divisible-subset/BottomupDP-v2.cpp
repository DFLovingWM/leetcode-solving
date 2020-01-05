/**
 * Bottom-up DP（记录值）
 * 
 * 时间：`O(N^2)`, 80ms
 */

#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        if (nums.size() == 0) return {};

        unordered_map<int, int> num2Parent;
        unordered_map<int, int> num2Count;
        num2Parent[1] = 1;
        num2Count[1] = 0;

        sort(nums.begin(), nums.end());
        int target = 1;

        for (int i = 0; i < nums.size(); ++i) {
            int curr = nums[i];

            num2Count[curr] = 1;
            num2Parent[curr] = curr;

            // 遍历之前所有数字`prev`
            for (int j = i - 1; j >= 0; --j) {
                int prev = nums[j];
                if (curr % prev == 0 && num2Count[prev] + 1 > num2Count[curr]) {
                    num2Count[curr] = num2Count[prev] + 1;
                    num2Parent[curr] = prev;
                }
            }

            // 维护当前最大值对应的数字
            if (num2Count[curr] > num2Count[target]) target = curr;
        }

        // 反向构造路径
        vector<int> res;
        int pathLen = num2Count[target];
        while (res.size() < pathLen) {
            res.push_back(target);
            target = num2Parent[target];
        }
        reverse(res.begin(), res.end());

        return res;
    }
};