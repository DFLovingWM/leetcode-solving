/**
 * 贪心：找出每一对【低谷】和【高峰】
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
        int j = 0; // 当前低谷点
        for (int i = 1; i < n; ++i) {
            if (prices[i] > prices[j]) { // 比低谷要高 => 马上卖出！
                res += prices[i] - prices[j];
                j = i;
            } else if (prices[i] < prices[j]) { // 比低谷更低 => 买入（记录最低价）
                j = i;
            }
        }
        return res;
    }
};