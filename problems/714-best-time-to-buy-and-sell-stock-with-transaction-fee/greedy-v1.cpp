/**
 * 贪心：找出每一对【低谷】和【高峰】
 * 
 * 时间：`O(N)`, 116ms
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int maxProfit(vector<int>& prices, int fee) {
        const int n = prices.size();
        if (n == 0) return 0;

        int res = 0;
        int lowest = prices[0]; // 当前低谷
        for (int i = 1; i < n; ++i) {
            if (prices[i] - fee > lowest) { // 比低谷要高 => 马上卖出！
                res += prices[i] - fee - lowest;
                lowest = prices[i] - fee;
            } else if (prices[i] < lowest) { // 比低谷更低 => 买入（记录最低价）
                lowest = prices[i];
            }
        }
        return res;
    }
};