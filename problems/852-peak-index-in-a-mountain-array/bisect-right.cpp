/**
 * 二分查找：查找最后一个比左边大的
 * 
 * 时间：`O(logN)`, 8ms
 */

class Solution {
public:
    int peakIndexInMountainArray(vector<int>& A) {
        return bisectRight(A) - 1;
    }

    // 二分查找：寻找第一个不满足“比左边大”的元素
    int bisectRight(vector<int> &A) {
        int left = 0, right = A.size();
        while (left < right) {
            int mid = left + (right - left >> 1);
            if (A[mid] > A[mid - 1]) { // 比左边大，即满足 => 往右
                left = mid + 1;
            } else {
                right = mid;
            }
        }
        return left;
    }
};