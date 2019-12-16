/**
 * 贪心（找规律）
 * 时间：O(N)
 * 空间：O(1)
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    void nextPermutation(vector<int>& nums) {
        // 逆序，找到第一个不满足非降序的元素
        int i;
        for (i = nums.size() - 2; i >= 0; --i) {
            if (nums[i] < nums[i + 1]) {
                break;
            }
        }
        // 找不到，说明是最后一个排列了，则返回一个顺序排列
        if (i == -1) {
            reverse(nums.begin(), nums.end());
            return;
        }

        // nums[i]替换为下一个更大元素（在非降序部分中找）
        int j;
        for (j = nums.size() - 1; nums[j] <= nums[i]; --j) ;
        swap(nums[i], nums[j]);
        // 将逆序部分反转
        reversePart(nums, i + 1, nums.size() - 1);
    }

private:
    void swap (int &a, int &b) {
        int tmp = a;
        a = b;
        b = tmp;
    }

    void reversePart (vector<int> &arr, int left, int right) {
        for (; left < right; ++left, --right) {
            swap(arr[left], arr[right]);
        }
    }
};