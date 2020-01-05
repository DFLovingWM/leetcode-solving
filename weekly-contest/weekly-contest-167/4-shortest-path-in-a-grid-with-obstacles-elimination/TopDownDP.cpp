/**
 * Top-down DP
 * 
 * 时间：`O(M^2 * N^2 * K)`, 2708ms
 */

#include <vector>
#include <functional>
#include <algorithm>
using namespace std;

class Solution {
public:
    int shortestPath(vector<vector<int>>& grid, int K) {
        const int R = grid.size();
        const int C = grid[0].size();
        const int MAX = 1e8;

        function<bool(int, int)> isValid = [&](int x, int y) {
            return x >= 0 && x < R && y >= 0 && y < C;
        };

        vector<vector<vector<int>>> cache(R, vector<vector<int>>(C, vector<int>(K + 1, -1))); // 缓存
        vector<vector<int>> visit(R, vector<int>(C, 0)); // 标记已遍历

        // 递归函数：
        // 当前在`(x,y)`，剩余`k`次消除，最终到达终点对应的最小步数
        function<int(int, int, int)> helper = [&](int x, int y, int k) {
            if (x == R - 1 && y == C - 1) return 0;
            if (cache[x][y][k] != -1) return cache[x][y][k];

            int res = MAX;
            visit[x][y] = 1;
            for (auto dir : DIRS) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                if (!isValid(nx, ny) || visit[nx][ny]) continue;
                int nk = k - grid[nx][ny];
                if (nk < 0) continue;
                res = min(res, 1 + helper(nx, ny, nk));
            }
            visit[x][y] = 0;
            return cache[x][y][k] = res;
        };

        int res = helper(0, 0, K);
        return res >= MAX ? -1 : res;
    }

private:
    const vector<vector<int>> DIRS = {{-1, 0}, {0, -1}, {1, 0}, {0, 1}};
};