/**
 * Top-down DP
 * 
 * 时间：`O(N)`, 52ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    double nthPersonGetsNthSeat(int N) {
        n = N;
        cache = vector<double>(n, -1);
        return helper(0);
    }

    // 当前是第`i`个人选位置、对应最终第`n`个人坐对位置的概率
    double helper (int i) {
        if (cache[i] != -1) return cache[i];

        int r = n - i; // 剩余座位数
        if (r == 1) return 1;

        double res = (double) 1 / r + // i坐对
            (double) (r - 2) / r * helper(i + 1); // 前i个人不占据n的位置
        return cache[i] = res;
    }

private:
    int n;
    vector<double> cache;
};