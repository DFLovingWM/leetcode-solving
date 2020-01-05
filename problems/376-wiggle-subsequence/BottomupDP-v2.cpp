/**
 * Bottom-up DP
 * 
 * 时间：`O(N)`, 0ms
 */

class Solution {
public:
    int wiggleMaxLength(vector<int>& nums) {
        const int n = nums.size();
        if (n == 0) return 0;

        vector<int> up(n, 0); // up[i]表示前i个数字中，最后是上升的最大长度
        vector<int> down(n, 0); // down[i]表示前i个数字中，最后是下降的最大长度
        up[0] = down[0] = 1;

        for (int i = 1; i < n; ++i) {
            up[i] = nums[i] > nums[i-1] ? down[i-1] + 1 : up[i-1]; // 看是否上升
            down[i] = nums[i] < nums[i-1] ? up[i-1] + 1 : down[i-1]; // 看是否下降
        }

        return max(up[n-1], down[n-1]);
    }
};