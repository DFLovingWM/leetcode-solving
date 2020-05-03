/**
 * 有序表：使用multiset
 */

class Solution {
public:
    int longestSubarray(vector<int>& nums, int limit) {
      multiset<int> s; // 有序存放窗口中的数字
      const int n = nums.size();
      int l = 0;
      int res = 0;
      for (int r = 0; r < n; ++r) {
        s.insert(nums[r]);
        int d = *s.rbegin() - *s.begin();
        if (d <= limit) {
          res = max(res, r - l + 1);
        } else {
          // 注：因为是multiset，所以这里需要借助find来只删除1个，避免删除全部
          s.erase(s.find(nums[l++]));
        }
      }
      return res;
    }
};