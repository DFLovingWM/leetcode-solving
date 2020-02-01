/**
 * BFS（着色）
 * 
 * 时间：`O(N)`, 16ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        const int n = rooms.size();
        vector<int> currs;
        vector<bool> visited(n, false);

        currs.push_back(0);
        visited[0] = true;

        // 层次遍历
        while (currs.size() > 0) {
            vector<int> nexts;
            for (int i : currs) {
                for (int j : rooms[i]) {
                    if (!visited[j]) {
                        visited[j] = true;
                        nexts.push_back(j);
                    }
                }
            }
            currs = nexts;
        }

        for (int i = 0; i < n; ++i) {
            if (!visited[i]) return false;
        }
        return true;
    }
};