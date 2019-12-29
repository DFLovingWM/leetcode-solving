#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    // 使最大值最小，bisectLeft
    int findBestValue(vector<int>& arr, int target) {
        int sum = 0;
        int maximum = -1;
        for (int n : arr) {
            sum += n;
            maximum = max(maximum, n);
        }
        int diff = abs(sum - target);
        if (diff == 0) return maximum;

        // 二分
        int left = 1, right = maximum + 1;
        int mid;
        int currSum, prevSum;

        while (left < right) {
            mid = (left + right) / 2;

            // 检查mid
            currSum = getSum(arr, mid);
            prevSum = getSum(arr, mid - 1);

            if (prevSum >= target) {
                right = mid;
            } else if (currSum <= target) {
                left = mid + 1;
            } else {
                break;
            }
        }

        int curr = abs(currSum - target);
        int prev = abs(prevSum - target);
        if (prev <= curr) {
            return mid - 1;
        } else {
            return mid;
        }
    }

    int getSum(vector<int> &arr, int mid) {
        int res = 0;
        for (int n : arr) {
            res += min(n, mid);
        }
        return res;
    }
};