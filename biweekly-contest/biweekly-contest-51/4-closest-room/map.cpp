class Solution {
public:
    vector<int> closestRoom(vector<vector<int>>& rooms, vector<vector<int>>& queries) {
        // room 格式：[roomId, roomSize]
        // roomSize 降序
        sort(rooms.begin(), rooms.end(), [&](auto &A, auto &B) {
            return A[1] > B[1];
        });

        const int Q = queries.size();
        vector<int> qi(Q);
        for (int i = 0; i < Q; ++i) {
            qi[i] = i;
        }
        // qi：表示 queries
        // 排序：minSize 更大的在前面（优先处理）
        sort(qi.begin(), qi.end(), [&](int i, int j) {
            return queries[i][1] > queries[j][1];
        });

        vector<int> res(Q, -1);
        const int R = rooms.size();
        int j = 0;
        set<int> rs; // roomId 有序（升序）
        for (int i : qi) {
            const int preferI = queries[i][0];
            const int minSize = queries[i][1];

            // 加入满足目前 minSize 的房间
            for (; j < R && rooms[j][1] >= minSize; ++j) {
                rs.insert(rooms[j][0]);
            }
            // Edge case
            if (rs.empty()) {
              continue;
            }
            // 找离 roomId 最近的
            auto right = rs.lower_bound(preferI);
            if (right != rs.end() && (right == rs.begin() || *right - preferI < preferI - *prev(right))) { // 没有left、或者right更好时，取right
                res[i] = *right;
            } else { // 否则取left
                res[i] = *prev(right);
            }
        }
        return res;
    }
};