/**
 * 按步骤进行：枚举（顺次数很少）、筛选、排序
 */

#include <vector>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> sequentialDigits(int low, int high) {
        vector<int> res;
        for (int i = 1; i <= 9; ++i) { // 起点
            int n = 0;
            for (int j = i; j <= 9; ++j) { // 乘10的次数
                n = n * 10 + j;
                if (low <= n && n <= high) {
                    res.push_back(n);
                }
            }
        }
        sort(res.begin(), res.end());
        return res;
    }
};