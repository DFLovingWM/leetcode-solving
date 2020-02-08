/**
 * 二分查找：查找第一个比右边大的点
 * 
 * 时间：`O(logN)`, 16ms
 */

class Solution {
public:
    int peakIndexInMountainArray(vector<int>& A) {
        return bisectLeft(A);
    }

    // 二分查找：寻找第一个比右边大的点
    int bisectLeft(vector<int> &A) {
        int left = 0, right = A.size();
        while (left < right) {
            int mid = left + (right - left >> 1);
            if (A[mid] > A[mid + 1]) { // 比右边大 => 往左
                right = mid;
            } else {
                left = mid + 1;
            }
        }
        return left;
    }
};