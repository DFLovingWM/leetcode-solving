#include <unordered_set>
#include <vector>
using namespace std;

class Solution {
public:
    bool hasPath(vector<vector<int>>& maze, vector<int>& start, vector<int>& destination) {
        r = maze.size();
        c = maze[0].size();
        unordered_set<int> visit;
        return dfs(maze, visit, destination, start[0], start[1]);
    }

    bool dfs (vector<vector<int>>& maze, unordered_set<int>& visit, vector<int>& destination, int x, int y) {
        if (x == destination[0] && y == destination[1]) {
            return true;
        }

        for (auto dir : DIRS) {
            int nx = x, ny = y;

            // 在dir方向走到尽头
            while (true) {
                int xx = nx + dir[0];
                int yy = ny + dir[1];
                if (isValid(xx, yy) && maze[xx][yy] == 0) {
                    nx = xx;
                    ny = yy;
                } else {
                    break;
                }
            }

            int key = getHash(nx, ny);
            if (isValid(nx, ny) && !visit.count(key)) {
                visit.insert(key);
                if (dfs(maze, visit, destination, nx, ny)) return true;
            }
        }
        return false;
    }

    inline int getHash (int x, int y) {
        return x * c + y;
    }

    inline bool isValid (int x, int y) {
        return x >= 0 && x < r && y >= 0 && y < c;
    }
private:
    int r, c;
    const vector<vector<int>> DIRS = {{-1,0},{0,-1},{1,0},{0,1}};
};