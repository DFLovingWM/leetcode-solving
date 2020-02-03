/**
 * 双指针
 * 
 * 时间：`O(N)`, 0ms
 */

class Solution {
public:
    vector<int> twoSum(vector<int>& numbers, int target) {
        int L = 0, R = numbers.size() - 1;
        while (L < R) {
            int sum = numbers[L] + numbers[R];
            if (sum == target) {
                return {L + 1, R + 1};
                ++L;
                --R;
            } else if (sum < target) {
                ++L;
            } else {
                --R;
            }
        }
        return {};
    }
};