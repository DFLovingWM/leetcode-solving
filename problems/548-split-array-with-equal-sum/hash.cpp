/**
 * 固定中间，两边使用hash
 * 
 * 时间：`O(N^2)`
 */

class Solution {
public:
    bool splitArray(vector<int>& A) {
        const int n = A.size();
        vector<int> P(n + 1, 0); // 前缀和
        for (int i = 0; i < n; ++i) {
            P[i + 1] = P[i] + A[i];
        }

        // 遍历中间点（B[1]=i、C[0]=i+1）
        for (int i = 3; i <= n - 3; ++i) {
            unordered_set<int> exist;

            // 遍历左边点（A[1]=l、B[0]=l+1）
            for (int l = 1; l <= i - 2; ++l) {
                // 如果能分成相等的A、B，则记录
                if (P[l] - P[0] == P[i] - P[l + 1]) {
                    exist.insert(P[l] - P[0]);
                }
            }

            // 遍历右边点（C[1]=r、D[0]=r+1）
            for (int r = i + 2; r <= n - 2; ++r) {
                // 如果能分成相等的C、D，则看看哈希表中是否有相等的A、B
                if (P[r] - P[i + 1] == P[n] - P[r + 1]) {
                    if (exist.count(P[r] - P[i + 1])) {
                        return true;
                    }
                }
            }
        }
        return false;
    }
};