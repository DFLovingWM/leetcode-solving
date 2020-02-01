/**
 * 着色，DFS
 * 
 * 时间：`O(N^2)`, 48ms
 */

class Solution {
public:
    vector<vector<char>> updateBoard(vector<vector<char>>& _board, vector<int>& click) {
        board = _board;
        R = board.size(), C = board[0].size();
        visited = vector<vector<bool>>(R, vector<bool>(C, false));

        int x = click[0], y = click[1];
        if (board[x][y] == 'M') { // 直接踩中地雷..
            board[x][y] = 'X';
        } else {
            dfs(x, y);
        }
        return board;
    }

    void dfs(int x, int y) {
        visited[x][y] = true;

        // 数周围的地雷
        int bombCount = 0;
        for (auto &dir : DIRS) {
            int nx = x + dir[0];
            int ny = y + dir[1];
            if (isValid(nx, ny) && (board[nx][ny] == 'M' || board[nx][ny] == 'X')) {
                ++bombCount;
            }
        }

        if (bombCount == 0) { // 无地雷 => 继续扩展
            board[x][y] = 'B';
            for (auto &dir : DIRS) {
                int nx = x + dir[0];
                int ny = y + dir[1];
                if (isValid(nx, ny) && board[nx][ny] == 'E' && !visited[nx][ny]) {
                    dfs(nx, ny);
                }
            }
        } else { // 有地雷 => 停止扩展
            board[x][y] = bombCount + '0';
        }
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < R && y >= 0 && y < C;
    }

private:
    const vector<vector<int>> DIRS = {
        {-1, -1}, {-1, 0}, {-1, 1},
        {0, -1}, {0, 1},
        {1, -1}, {1, 0}, {1, 1}
    };
    int R, C;
    vector<vector<char>> board;
    vector<vector<bool>> visited;
};