/**
 * Top-down DP
 * 
 * 时间：`O(N^2)`, 32ms
 * 空间：`O(N^2)`, 13.7MB
 */

class Solution {
public:
    int calculateMinimumHP(vector<vector<int>>& _dungeon) {
        dungeon = _dungeon;
        r = dungeon.size();
        c = dungeon[0].size();
        memo.assign(r + 1, vector<int>(c + 1, -1));
        return helper(0, 0);
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < r && y >= 0 && y < c;
    }

    // 当前在(x, y)、最终顺利营救公主的最小血量
    int helper(int x, int y) {
        if (x == r - 1 && y == c - 1) return max(1 - dungeon[x][y], 1); // 最小血量至少为1
        if (memo[x][y] != -1) return memo[x][y];

        int res = INT_MAX;
        for (auto dir : DIRS) { // 右、下
            int nx = x + dir[0];
            int ny = y + dir[1];
            if (!isValid(nx, ny)) continue;

            int need = helper(nx, ny);
            res = min(res, max(need - dungeon[x][y], 1)); // 同理，最小血量至少为1
        }
        return memo[x][y] = res;
    }

private:
    int r, c;
    vector<vector<int>> dungeon;
    vector<vector<int>> memo;
    const vector<vector<int>> DIRS = {{1, 0}, {0, 1}};
};