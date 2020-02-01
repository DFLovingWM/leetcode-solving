/**
 * 逆序对，使用归并排序
 * 
 * 时间：`O(NlogN)`, 460ms
 */

class Solution {
public:
    bool isIdealPermutation(vector<int>& arr) {
        int localCount = 0;
        for (int i = 1; i < arr.size(); ++i) {
            if (arr[i - 1] > arr[i]) {
                ++localCount;
            }
        }

        globalCount = 0;
        mergeSort(arr, 0, arr.size());

        return localCount == globalCount;
    }

    void mergeSort(vector<int> &arr, int left, int right) {
        if (right - left <= 1) return;

        int mid = left + (right - left >> 1);
        mergeSort(arr, left, mid);
        mergeSort(arr, mid, right);

        // 数逆序对
        int i = left, j = mid;
        for (; i < mid; ++i) {
            while (j < right && arr[j] <= arr[i]) ++j;
            globalCount += j - mid;
        }

        vector<int> tmpArr;
        i = left, j = mid;
        while (i < mid && j < right) {
            if (arr[i] < arr[j]) {
                tmpArr.push_back(arr[i++]);
            } else {
                tmpArr.push_back(arr[j++]);
            }
        }
        while (i < mid) {
            tmpArr.push_back(arr[i++]);
        }
        while (j < right) {
            tmpArr.push_back(arr[j++]);
        }

        // 写入arr
        int k = 0;
        for (int i = left; i < right; ++i) {
            arr[i] = tmpArr[k++];
        }
    }

private:
    int globalCount;
};