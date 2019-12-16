/**
 * 暴力：O(N^2), 24ms
 */

#include <vector>
using namespace std;

class Solution {
public:
    int removeCoveredIntervals(vector<vector<int>>& intervals) {
        int n = intervals.size();
        int del = 0;
        for (int i = 0; i < n; ++i) {
            for (int j = 0; j < n; ++j) {
                if (j != i) {
                    if (contains(intervals[j], intervals[i])) {
                        ++del;
                        break;
                    }
                }
            }
        }
        return n - del;
    }

    bool contains (vector<int> &A, vector<int> &B) {
        return A[0] <= B[0] && A[1] >= B[1];
    }
};