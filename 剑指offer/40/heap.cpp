/**
 * 求最小的K个数，可以维护大小为K的最大堆
 * 
 * 时间：O(NlogK), 76ms
 * 空间：O(K), 13.2MB
 */

class Solution {
public:
    vector<int> getLeastNumbers(vector<int>& arr, int k) {
        priority_queue<int> Q;
        for (int n : arr) {
            Q.push(n);
            if (Q.size() > k) {
                Q.pop();
            }
        }

        vector<int> res;
        while (!Q.empty()) {
            res.push_back(Q.top());
            Q.pop();
        }
        return res;
    }
};