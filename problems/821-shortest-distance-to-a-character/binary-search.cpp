/**
 * 二分查找
 * 
 * 时间：`O(NlogM)`. 4ms
 */

class Solution {
public:
    vector<int> shortestToChar(string S, char pivot) {
        const int n = S.size();

        vector<int> indices; // 保存pivot的所有下标（升序）
        for (int i = 0; i < n; ++i) {
            if (S[i] == pivot) {
                indices.push_back(i);
            }
        }

        vector<int> res(n);
        for (int i = 0; i < n; ++i) {
            if (S[i] == pivot) {
                res[i] = 0;
            } else {
                res[i] = getMinDist(indices, i);
            }
        }
        return res;
    }

    // 二分查找：寻找离`target`最近的下标
    // 返回距离
    int getMinDist(vector<int> &indices, int target) {
        int left = 0, right = indices.size();
        while (left < right) {
            int mid = left + (right - left >> 1);
            if (target > indices[mid]) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        // 两个候选值，取距离更小者
        int res = INT_MAX;
        if (left < indices.size()) {
            res = min(res, abs(indices[left] - target));
        }
        if (left - 1 >= 0) {
            res = min(res, abs(indices[left - 1] - target));
        }
        return res;
    }
};