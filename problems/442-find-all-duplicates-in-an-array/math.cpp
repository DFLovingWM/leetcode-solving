/**
 * 抽屉原理
 * 
 * 时间：`O(N)`, 68ms
 * 空间：`O(1)`
 */

class Solution {
public:
    vector<int> findDuplicates(vector<int>& nums) {
        const int n = nums.size();

        // 检测每一个数字是否在正确位置上
        for (int i = 0; i < n; ++i) {
            // 设nums[i]为`num`
            // 数字`num`应该在位置`num-1`处，然而现在`num`在`i`处。交换后位置`num-1`处的数字就合法了。
            // 使用while是因为：交换后，位置`i`处的新数字很可能还是不合法，所以要继续该过程
            while (nums[nums[i] - 1] != nums[i]) {
                swap(nums, i, nums[i] - 1);
            }
        }

        // 收集不在正确位置上的数字
        vector<int> res;
        for (int i = 0; i < n; ++i) {
            if (nums[i] != i + 1) {
                res.push_back(nums[i]);
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