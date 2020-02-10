class Solution {
public:
    int numOfSubarrays(vector<int>& arr, int k, int threshold) {
        int targetSum = threshold * k;
        vector<int> prefix = {0};
        for (int n : arr) {
            prefix.push_back(prefix.back() + n);
        }

        int res = 0;
        for (int i = k; i < prefix.size(); ++i) {
            if (prefix[i] - prefix[i - k] >= targetSum) ++res;
        }
        return res;
    }
};