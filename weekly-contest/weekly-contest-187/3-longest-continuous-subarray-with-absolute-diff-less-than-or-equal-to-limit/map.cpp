/**
 * 有序表：使用map
 */

class Solution {
public:
    int longestSubarray(vector<int>& nums, int limit) {
      map<int, int> m; // 数字(有序) => 个数（频次）
      const int n = nums.size();
      int l = 0;
      int res = 0;
      for (int r = 0; r < n; ++r) {
        ++m[nums[r]];
        int d = m.rbegin()->first - m.begin()->first;
        if (d <= limit) {
          res = max(res, r - l + 1);
        } else {
          // 注：频次减到0时，需要删除key
          int oldNum = nums[l++];
          if (--m[oldNum] == 0) {
            m.erase(oldNum);
          }
        }
      }
      return res;
    }
};