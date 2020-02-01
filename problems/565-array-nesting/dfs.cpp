class Solution {
public:
    int arrayNesting(vector<int>& _nums) {
        nums = _nums;
        const int N = nums.size();
        visit.assign(N, false);

        int res = 0;
        for (int i = 0; i < N; ++i) {
            if (!visit[i]) {
                res = max(res, dfs(i));
            }
        }
        return res;
    }

    int dfs(int curr) {
        if (visit[curr]) return 0;

        visit[curr] = true;
        return 1 + dfs(nums[curr]);
    }

private:
    vector<int> nums;
    vector<bool> visit;
};