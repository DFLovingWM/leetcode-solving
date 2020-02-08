/**
 * 贪心 + 计数排序
 * 
 * 时间：`O(N)`, 52ms
 */

class Solution {
public:
    int arrayPairSum(vector<int>& nums) {
        vector<int> arr = countSort(nums);

        int sum = 0;
        for (int i = 0; i < arr.size(); i += 2) {
            sum += arr[i];
        }
        return sum;
    }

    // 计数排序
    vector<int> countSort(vector<int> &nums) {
        // 把数字放进哈希表中
        vector<int> freq(20001, 0);
        for (int num : nums) {
            ++freq[num + 10000]; // 因为存在负数，所以需要偏移到正数
        }

        // 将数字取出来，变成有序数组
        vector<int> arr;
        for (int i = 0; i <= 20000; ++i) {
            int realNum = i - 10000;
            for (int k = 0; k < freq[i]; ++k) {
                arr.push_back(realNum);
            }
        }
        return arr;
    }
};