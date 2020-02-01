class Solution {
public:
    vector<int> filterRestaurants(vector<vector<int>>& restaurants, int veganFriendly, int maxPrice, int maxDistance) {
        const int n = restaurants.size();

        // 筛选
        vector<vector<int>> arr;
        for (int i = 0; i < n; ++i) {
            auto curr = restaurants[i];
            if (veganFriendly && !curr[2]) continue;
            if (curr[3] > maxPrice || curr[4] > maxDistance) continue;
            arr.push_back(curr);
        }

        // 排序
        sort(arr.begin(), arr.end(), [&](const auto &A, const auto &B) {
            if (A[1] != B[1]) return A[1] > B[1]; // rating高的
            return A[0] > B[0]; // id大的
        });

        // 取id返回
        vector<int> res;
        for (auto &r : arr) {
            res.push_back(r[0]);
        }
        return res;
    }
};