/**
 * 暴力遍历
 * 
 * 时间：`O(NlogN)`
 */

class Solution {
public:
    vector<int> getNoZeroIntegers(int n) {
        for (int i = 1; i <= n / 2; ++i) {
            int j = n - i;
            if (judge(i) && judge(j)) return {i, j};
        }
        return {0, 0};
    }

    bool judge(int x) {
        for (; x; x /= 10) {
            if (x % 10 == 0) return false;
        }
        return true;
    }
};