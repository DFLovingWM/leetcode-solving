/**
 * DFS（着色）
 * 
 * 时间：`O(N)`, 8ms
 */

#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& _rooms) {
        rooms = _rooms;
        dfs(0); // 一开始可以进入0号房间
        return visited.size() == rooms.size();
    }

    void dfs(int i) {
        visited.insert(i);
        for (int j : rooms[i]) {
            if (!visited.count(j)) {
                dfs(j);
            }
        }
    }

private:
    vector<vector<int>> rooms;
    unordered_set<int> visited;
};