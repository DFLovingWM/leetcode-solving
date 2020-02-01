/**
 * DFS
 * 
 * 时间：`O(NM)`, 20ms
 */

class Solution {
public:
    vector<vector<int>> floodFill(vector<vector<int>>& image, int sr, int sc, int newColor) {
        R = image.size();
        C = image[0].size();
        srcColor = image[sr][sc];
        destColor = newColor;
        if (srcColor == destColor) return image; // 同色，则不需要染色

        res = image;
        dfs(sr, sc);
        return res;
    }

    void dfs(int x, int y) {
        res[x][y] = destColor;
        for (auto &dir : DIRS) {
            int nx = x + dir[0];
            int ny = y + dir[1];
            if (isValid(nx, ny) && res[nx][ny] == srcColor) {
                dfs(nx, ny);
            }
        }
    }

    bool isValid(int x, int y) {
        return x >= 0 && x < R && y >= 0 && y < C;
    }

private:
    int R, C;
    int srcColor, destColor;
    vector<vector<int>> res;
    int DIRS[4][2] = {{-1, 0}, {1, 0}, {0, 1}, {0, -1}};
};