/**
 * 站在数字的角度，被分到哪个桶中
 * 
 * 时间：`O()`, 4ms
 */

class Solution {
public:
    bool canPartitionKSubsets(vector<int>& _nums, int k) {
        nums = _nums;
        sort(nums.begin(), nums.end()); // 排序，方便剪枝

        int sum = 0;
        for (int num : nums) {
            sum += num;
        }
        // 不能均分，直接失败
        if (sum % k != 0) return false;

        target = sum / k;
        // 如果存在超出桶大小的数字，也是直接失败
        if (nums[nums.size() - 1] > target) return false;

        // 如果有数字刚好满一桶，直接装好
        while (!nums.empty() && nums.back() == target) {
            nums.pop_back();
            --k;
        }

        vector<int> buckets(k, 0); // 表示k个桶的当前重量
        return backtrack(nums.size() - 1, buckets);
    }

    // 每次把一个数字放到某个桶中
    bool backtrack(int numIndex, vector<int> &buckets) {
        if (numIndex == -1) return true; // 数字都被分完了，就成功了

        int n = nums[numIndex];
        for (int i = 0; i < buckets.size(); ++i) {
            // 剪枝(重要)：同重量的桶，只放一个，以避免重复
            if (i - 1 >= 0 && buckets[i] == buckets[i - 1]) continue;

            if (buckets[i] + n <= target) { // `n`能放在第`i`个桶中
                // 放
                buckets[i] += n;
                if (backtrack(numIndex - 1, buckets)) return true;
                // 不放
                buckets[i] -= n;
            }
        }
        return false;
    }

private:
    int target;
    vector<int> nums;
};