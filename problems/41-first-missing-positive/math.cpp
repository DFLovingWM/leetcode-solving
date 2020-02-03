/**
 * 答案范围为`[1, N]`，使用：抽屉原理
 * 
 * 时间：`O(N)`, 0ms
 * 空间：`O(1)`
 */

class Solution {
public:
    int firstMissingPositive(vector<int>& nums) {
        n = nums.size();

        for (int i = 0; i < n; ++i) {
            int num;
            while (isValid(num = nums[i]) && nums[num - 1] != num) {
                swap(nums, num - 1, i);
            }
        }

        // 第一个不合法（缺失）的数字
        int i;
        for (i = 0; i < n; ++i) {
            if (nums[i] != i + 1) {
                break;
            }
        }
        return i + 1;
    }

    bool isValid(int num) {
        return num >= 1 && num <= n;
    }

    void swap(vector<int> &nums, int i, int j) {
        int tmp = nums[i];
        nums[i] = nums[j];
        nums[j] = tmp;
    }

private:
    int n;
};