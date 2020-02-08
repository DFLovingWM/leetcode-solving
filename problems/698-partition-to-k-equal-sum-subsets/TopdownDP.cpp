/**
 * Top-down DP + 位压缩
 * 站在桶的角度来选数字：对于一个数字，取/不取
 * 
 * 时间：8ms
 */

class Solution {
public:
    bool canPartitionKSubsets(vector<int>& _nums, int _k) {
        k = _k;
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

        return backtrack(0, 0, 0);
    }

    // 按桶装：装满一桶后，才到下一桶
    // 其中，used为二进制（位压缩）
    bool backtrack(int used, int bucketIndex, int sum) {
        // 装满全部桶，则返回true
        if (bucketIndex == k) return true;

        string key = to_string(used) + to_string(bucketIndex) + to_string(sum);
        if (memo.count(key)) return memo[key];

        int res = false;
        if (sum == target) { // 装满一桶，就到下一桶
            return memo[key] = backtrack(used, bucketIndex + 1, 0);
        } else { // 未够一桶，则继续装
            bool res = false;
            for (int i = nums.size() - 1; i >= 0; --i) {
                if (!(used & (1 << i)) && sum + nums[i] <= target) {
                    // 探索：取i
                    used ^= 1 << i;
                    if (backtrack(used, bucketIndex, sum + nums[i])) {
                        res = true;
                        break;
                    }
                    // 回溯：不取i
                    used ^= 1 << i;
                }
            }
            return memo[key] = res;
        }
    }

private:
    vector<int> nums;
    int target;
    int k;
    unordered_map<string, bool> memo;
};