class Solution {
public:
    int getMoneyAmount(int n) {
        cache = vector<vector<int>>(n + 1, vector<int>(n + 1, -1));
        return helper(1, n);
    }

    int helper (int left, int right) {
        if (left >= right) return 0;
        if (cache[left][right] != -1) return cache[left][right];

        int res = INT_MAX;
        // 这次我可能会猜`left ~ right`中的任意一个数
        // 取最大值（到了最后才猜对）
        for (int guess = left; guess <= right; ++guess) {
            int curr = guess + max(helper(left, guess - 1), helper(guess + 1, right)); // 这里取max：保证极大值，即需要猜到最后才猜对
            res = min(res, curr); // 这里取min：保证极小化
        }
        cache[left][right] = res;
        return res;
    }

private:
    vector<vector<int>> cache;
};