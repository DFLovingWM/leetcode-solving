/**
 * 因为Fib基于值的累加关系，所以用值作为下标
 */

#include <iostream>
#include <vector>
#include <unordered_map>
using namespace std;

class Solution {
public:
    int lenLongestFibSubseq(vector<int>& arr) {
        const int n = arr.size();
        unordered_map<int, unordered_map<int, int>> dp; // dp[i][j]表示以i结尾、以j为倒数第二结尾的最长Fib子序列
        int res = 1;

        for (int a : arr) {
            dp[a][a] = 1;
        }

        for (int i = 1; i < n; ++i) { // 从第2个数字开始
            int C = arr[i];
            for (int j = 0; j < i; ++j) { // 往前寻找C能拼接上的
                int B = arr[j];
                int A = C - B;
                if (A < B) {
                    dp[C][B] = max(dp[C][B], dp[B][A] + 1);
                    res = max(res, dp[C][B]);
                }
            }
        }

        return res;
    }
};

int main () {
    vector<int> arr = {2,4,7,8,9,10,14,15,18,23,32,50};
    cout << Solution().lenLongestFibSubseq(arr) << endl;
    return 0;
}