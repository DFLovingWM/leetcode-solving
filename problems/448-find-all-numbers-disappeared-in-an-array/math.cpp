/**
 * 抽屉原理
 * 
 * 时间：`O(N)`, 68ms
 * 空间：`O(1)`
 */

class Solution {
public:
    vector<int> findDisappearedNumbers(vector<int>& nums) {
        const int n = nums.size();

        for (int i = 0; i < n; ++i) {
            int num;
            while (nums[(num = nums[i]) - 1] != num) {
                swap(nums, num - 1, i);
            }
        }

        vector<int> res;
        for (int i = 0; i < n; ++i) {
            if (nums[i] != i + 1) {
                res.push_back(i + 1);
            }
        }
        return res;
    }

    void swap(vector<int> &nums, int i, int j) {
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }
};