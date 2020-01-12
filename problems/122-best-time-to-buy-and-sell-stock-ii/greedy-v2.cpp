/**
 * 贪心：找出每一对【最低谷】和【最高峰】
 * 
 * 时间：`O(N)`, 8ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices) {
        const int n = prices.size();
        if (n == 0) return 0;

        int res = 0;
        int lowest = prices[0]; // 当前最低点

        for (int i = 1; i < n; ++i) {
            if (prices[i] < prices[i - 1]) { // prices[i-1]就是当前最高点
                res += prices[i - 1] - lowest;
                lowest = prices[i];
            }
        }
        if (prices[n - 1] > lowest) {
            res += prices[n - 1] - lowest;
        }

        return res;
    }
};