/**
 * 维护单调双端队列
 * 
 * 时间：`O(N)`, 144ms
 */

#include <vector>
#include <deque>
#include <algorithm>
using namespace std;

class Solution {
public:
    int shortestSubarray(vector<int>& arr, int K) {
        const int n = arr.size();

        vector<int> prefix; // 前缀和
        prefix.push_back(0);
        for (int n : arr) {
            prefix.push_back(prefix.back() + n);
        }

        deque<int> deq; // 单调（递增）的双端队列
        int res = n + 1; // 结果
        for (int i = 0; i <= n; ++i) {
            // 作为减数，下标越大、数字越小，就越好
            // 作为减数：比我更小的才能留下
            while (!deq.empty() && prefix[deq.back()] >= prefix[i]) {
                deq.pop_back();
            }

            // 更新答案
            while (!deq.empty() && prefix[i] - prefix[deq.front()] >= K) {
                res = min(res, i - deq.front());
                deq.pop_front(); // 更新后需要删除head元素，是因为之后的会更长，没必要保留
            }

            deq.push_back(i); // 记录当前元素（仅下标足够）
        }

        return res == n + 1 ? -1 : res;
    }
};