/**
 * Bottom-up DP（记录下标）：`dp[i]`表示以`arr[i]`为结尾的最大长度，`prev[i]`记录`i`的上一个下标
 * 
 * 时间：`O(N^2)`, 56ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> largestDivisibleSubset(vector<int>& nums) {
        const int n = nums.size();
        if (n == 0) return {};

        // 排序：升序
        sort(nums.begin(), nums.end());

        vector<int> dp(n, 1);
        vector<int> prev(n, 0);
        int target = 0;

        for (int i = 0; i < n; ++i) {
            prev[i] = i;
            for (int j = i - 1; j >= 0; --j) {
                if (nums[i] % nums[j] == 0 && dp[j] + 1 > dp[i]) { // 能整除，并且拼接后比现在更长
                    dp[i] = dp[j] + 1;
                    prev[i] = j;
                }
            }

            if (dp[i] > dp[target]) target = i;
        }

        // 找最长对应的路径
        vector<int> res;
        int i = target;
        while (res.size() < dp[target]) {
            res.push_back(nums[i]);
            i = prev[i];
        }
        reverse(res.begin(), res.end());

        return res;
    }
};