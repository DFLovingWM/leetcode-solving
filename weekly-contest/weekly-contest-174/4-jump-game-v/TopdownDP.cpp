/**
 * Top-down DP
 * 
 * 时间：`O(ND)`, 48ms
 * 空间：`O(N)`
 */

class Solution {
public:
    int maxJumps(vector<int>& _arr, int _d) {
        arr = _arr;
        d = _d;
        const int n = arr.size();
        memo.assign(n, -1);

        int res = 0;
        for (int i = 0; i < n; ++i) {
            res = max(res, helper(i));
        }
        return res;
    }

    int helper(int i) {
        if (memo[i] != -1) return memo[i];

        int res = 1;
        // 左边
        for (int j = i - 1; j >= 0 && i - j <= d && arr[j] < arr[i]; --j) {
            int tmp = 1 + helper(j);
            res = max(res, tmp);
        }
        // 右边
        for (int j = i + 1; j < arr.size() && j - i <= d && arr[j] < arr[i]; ++j) {
            int tmp = 1 + helper(j);
            res = max(res, tmp);
        }
        return memo[i] = res;
    }

private:
    int d;
    vector<int> arr;
    vector<int> memo;
};