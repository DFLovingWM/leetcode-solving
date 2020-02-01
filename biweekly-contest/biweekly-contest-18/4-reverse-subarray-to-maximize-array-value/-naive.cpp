class Solution {
public:
    int maxValueAfterReverse(vector<int>& nums) {
        const int n = nums.size();
        int sum = 0;
        for (int i = 1; i < n; ++i) {
            sum += abs(nums[i] - nums[i - 1]);
        }
        // 暴力遍历
        int res = sum;
        for (int i = 0; i < n; ++i) {
            for (int j = i + 1; j < n; ++j) {
                int curr = sum;
                if (i != 0) {
                    curr = curr - abs(nums[i] - nums[i - 1]) + abs(nums[j] - nums[i - 1]);
                }
                if (j != n - 1) {
                    curr = curr - abs(nums[j] - nums[j + 1]) + abs(nums[i] - nums[j + 1]);
                }
                res = max(res, curr);
            }
        }
        return res;
    }
};