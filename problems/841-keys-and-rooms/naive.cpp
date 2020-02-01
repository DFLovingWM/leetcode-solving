/**
 * 模拟：每次只扩展一层，然后重新选
 * 
 * 时间：`O(N^2)`, 32ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    bool canVisitAllRooms(vector<vector<int>>& rooms) {
        const int n = rooms.size();
        vector<bool> hasKey(n, false);
        vector<bool> visited(n, false);
        hasKey[0] = true;

        while (true) {
            // 选取一个有钥匙、未遍历的房间
            int i;
            for (i = 0; i < n; ++i) {
                if (hasKey[i] && !visited[i]) {
                    break;
                }
            }
            if (i == n) break;

            // 标记
            visited[i] = true;
            // 扩展
            for (int j : rooms[i]) {
                hasKey[j] = true;
            }
        }

        for (int i = 0; i < n; ++i) {
            if (!hasKey[i]) return false;
        }
        return true;
    }
};