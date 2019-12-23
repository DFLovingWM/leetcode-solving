/**
 * 模拟
 * 
 * 时间：140ms
 */

#include <iostream>
#include <vector>
using namespace std;

// 盒子的4种状态
const int NO_BOX_OR_KEY = 0b00;
const int ONLY_BOX = 0b10;
const int ONLY_KEY = 0b01;
const int BOTH_BOX_AND_KEY = 0b11; // 意味着可以打开

class Solution {
public:
    int maxCandies(vector<int>& status, vector<int>& candies, vector<vector<int>>& keys, vector<vector<int>>& containedBoxes, vector<int>& initialBoxes) {
        const int n = status.size();
        vector<bool> visit(n, false); // 盒子编码 => 是否已打开
        vector<int> currStatus(n, NO_BOX_OR_KEY); // 盒子编码 => 状态

        // 设置初始状态：
        for (int i : initialBoxes) {
            currStatus[i] = ONLY_BOX;
        }
        for (int i = 0; i < n; ++i) {
            if (status[i] == 1) {
                if (currStatus[i] == NO_BOX_OR_KEY) {
                    currStatus[i] = ONLY_KEY;
                } else if (currStatus[i] == ONLY_BOX) {
                    currStatus[i] = BOTH_BOX_AND_KEY;
                }
            }
        }

        int res = 0; // 结果

        // 循环、直到没有箱子可用
        while (true) {
            int i;
            for (i = 0; i < n; ++i) {
                if (currStatus[i] == BOTH_BOX_AND_KEY && !visit[i]) {
                    break;
                }
            }
            if (i == n) break; // 没有箱子可用，就退出死循环

            // 获得糖果
            visit[i] = true;
            res += candies[i];

            // 获得钥匙
            for (auto j : keys[i]) {
                if (currStatus[j] == NO_BOX_OR_KEY) {
                    currStatus[j] = ONLY_KEY;
                } else if (currStatus[j] == ONLY_BOX) {
                    currStatus[j] = BOTH_BOX_AND_KEY;
                }
            }

            // 获得盒子
            for (auto j : containedBoxes[i]) {
                if (currStatus[j] == NO_BOX_OR_KEY) {
                    currStatus[j] = ONLY_BOX;
                } else if (currStatus[j] == ONLY_KEY) {
                    currStatus[j] = BOTH_BOX_AND_KEY;
                }
            }
        }

        return res;
    }
};

// int main () {
//     Solution solution = Solution();
//     vector<int> status = {1,0,1,0}, candies = {7,5,4,100}, initialBoxes = {0};
//     vector<vector<int>> keys = {{}, {}, {1}, {}}, containedBoxes = {{1,2}, {3}, {}, {}};
//     cout << solution.maxCandies(status, candies, keys, containedBoxes, initialBoxes) << endl;
//     return 0;
// }