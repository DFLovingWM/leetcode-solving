/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`, 160ms
 */

#include <vector>
#include <string>
#include <unordered_map>
using namespace std;

class Solution {
public:
    bool canCross(vector<int>& stones) {
        const int n = stones.size();
        end = stones[n - 1];
        hasStone.insert(stones.begin(), stones.end());
        return helper(stones[0], 0);
    }

    // `curr`表示当前位置，`prevK`表示上一次的跳跃数
    bool helper (int curr, int prevK) {
        if (curr == end) return true; // 终点

        string key = to_string(curr) + "," + to_string(prevK);
        if (cache.count(key)) return cache[key];

        bool res = false;
        for (int k : { prevK - 1, prevK, prevK + 1 }) { // 3种策略
            if (k > 0 && hasStone.count(curr + k)) {
                if (helper(curr + k, k)) {
                    res = true;
                    break;
                }
            }
        }
        return cache[key] = res;
    }

private:
    int end; // 终点位置
    unordered_set<int> hasStone; // 哈希表：hasStone[i]表示在位置`i`处存在石头
    unordered_map<string, int> cache; // DP数组
};