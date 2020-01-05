/**
 * 回溯
 * 
 * 时间：24ms
 */

#include <iostream>
#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    int shoppingOffers(vector<int>& priceList, vector<vector<int>>& specialList, vector<int>& needList) {
        prices = priceList;
        needs = needList;

        n = priceList.size();

        // 剔除坑爹（比单卖还贵）的大礼包
        for (auto special : specialList) {
            int single = 0;
            for (int i = 0; i < n; ++i) {
                single += special[i] * prices[i];
            }
            if (single <= special[n]) continue;
            specials.push_back(special);
        }

        return backtrack();
    }

    // 递归函数
    int backtrack() {
        // 贪心：先遍历大礼包
        int res = INT_MAX;
        for (auto special : specials) {
            if (canBuy(special)) {
                // 探索
                buy(special);
                res = min(res, special[n] + backtrack());
                // 回溯
                unbuy(special);
            }
        }

        // 如果没有大礼包可用，那么剩下的全部只能单买
        if (res == INT_MAX) {
            res = 0;
            for (int i = 0; i < n; ++i) {
                res += needs[i] * prices[i];
            }
        }
        return res;
    }

    bool canBuy(const vector<int> &bag) {
        for (int i = 0; i < n; ++i) {
            if (bag[i] > needs[i]) return false;
        }
        return true;
    }

    void buy(const vector<int> &bag) {
        for (int i = 0; i < n; ++i) {
            needs[i] -= bag[i];
        }
    }

    void unbuy(const vector<int> &bag) {
        for (int i = 0; i < n; ++i) {
            needs[i] += bag[i];
        }
    }

private:
    int n;
    vector<int> needs;
    vector<int> prices;
    vector<vector<int>> specials;
};