/**
 * 状压DP：因为needs最大是"666666"，可以用 7^6（即7进制） 存下，实在不习惯也可以用10进制
 * 
 * 时间：8ms
 */

#include <iostream>
#include <vector>
#include <unordered_map>
#include <algorithm>
using namespace std;

const int BASE = 10; // 7进制

class Solution {
public:
    int shoppingOffers(vector<int>& priceList, vector<vector<int>>& specialList, vector<int>& needList) {
        prices = priceList;
        n = prices.size();

        // 剔除坑爹（比单卖还贵）的大礼包，并编码
        for (auto special : specialList) {
            int single = 0;
            for (int i = 0; i < n; ++i) {
                single += special[i] * prices[i];
            }
            if (single <= special[n]) continue;

            int bag = getHash(special);
            if (!bag2Price.count(bag) || special[n] < bag2Price[bag]) { // 之前不存在、或已存在重复礼包但更便宜的 => 记录
                bag2Price[bag] = special[n];
            }
        }

        // 状态编码
        return helper(getHash(needList));
    }

    int helper(const int need) {
        if (cache.count(need)) return cache[need]; // 加快（1）：剪枝

        // 先看大礼包
        int res = INT_MAX;
        for (auto p : bag2Price) {
            if (canBuy(need, p.first)) { // 如果能买
                res = min(res, helper(need - p.first) + p.second); // 加快（2）：直接相减，递归时只传递基本类型
            }
        }

        // 表示无法再买大礼包，则单买
        if (res == INT_MAX) {
            res = 0;
            int tmp = need;
            for (int i = n - 1; i >= 0; --i, tmp /= BASE) {
                res += prices[i] * (tmp % BASE);
            }
        }
        
        return cache[need] = res;
    }

    int getHash(const vector<int> &arr) {
        int res = 0;
        for (int i = 0; i < n; ++i) {
            res = res * BASE + arr[i];
        }
        return res;
    }

    // 能购买：需要保证每一位上的数字都不比礼包的小
    bool canBuy(int need, int special) {
        while (need || special) {
            if (need % BASE < special % BASE) return false;
            need /= BASE;
            special /= BASE;
        }
        return true;
    }

private:
    int n; // 物品数（仅作为全局变量）
    unordered_map<int, int> cache; // DP缓存
    vector<int> prices; // 单卖价格（仅作为全局变量）
    unordered_map<int, int> bag2Price; // 礼包 => 价格
};

// int main () {
//     vector<int> priceList = {2,3,4}, needList = {1,2,1};
//     vector<vector<int>> specialList = { {1,1,0,4}, {2,2,1,9} };
//     cout << Solution().shoppingOffers(priceList, specialList, needList) << endl;
//     return 0;
// }