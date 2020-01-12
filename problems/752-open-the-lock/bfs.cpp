/**
 * BFS
 * 
 * 时间：最多`O(10^4)`，300ms
 */

#include <vector>
#include <unordered_set>
#include <string>
using namespace std;

class Solution {
public:
    int openLock(vector<string>& deadends, string target) {
        unordered_set<string> visited(deadends.begin(), deadends.end());
        vector<string> currs;

        const string start("0000");
        if (visited.count(start)) return -1; // 一开始就死了...

        currs.push_back(start);
        visited.insert(start);

        for (int level = 0; currs.size() > 0; ++level) {
            vector<string> nexts;
            for (string &curr : currs) {
                // 判断本结点是否到达终点
                if (curr == target) return level;

                // 扩展子结点
                for (int i = 0; i < 4; ++i) {
                    // 该位-1
                    string low(curr);
                    low[i] = (low[i] - '0' - 1 + 10) % 10 + '0';
                    if (!visited.count(low)) {
                        visited.insert(low);
                        nexts.push_back(low);
                    }

                    // 该位+1
                    string high(curr);
                    high[i] = (high[i] - '0' + 1) % 10 + '0';
                    if (!visited.count(high)) {
                        visited.insert(high);
                        nexts.push_back(high);
                    }
                }
            }
            currs = nexts;
        }
        return -1;
    }
};