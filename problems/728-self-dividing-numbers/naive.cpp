/**
 * 暴力枚举 + 检测
 * 
 * 时间：`O(NlogN)`
 */

class Solution {
public:
    vector<int> selfDividingNumbers(int left, int right) {
        vector<int> res;
        for (int i = left; i <= right; ++i) {
            if (check(i)) {
                res.push_back(i);
            }
        }
        return res;
    }

    int check(int num) {
        for (int n = num; n; n /= 10) {
            if (n % 10 == 0 || num % (n % 10) != 0) { // 包含0，或者无法整除 => 非自除数
                return false;
            }
        }
        return true;
    }
};