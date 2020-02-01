class Solution {
public:
    vector<int> arrayRankTransform(vector<int>& arr) {
        set<int> nums(arr.begin(), arr.end()); // 去重并排序
        int id = 0;
        unordered_map<int, int> num2Index;
        for (int num : nums) {
            num2Index[num] = ++id;
        }

        const int n = arr.size();
        vector<int> res(n);
        for (int i = 0; i < n; ++i) {
            res[i] = num2Index[arr[i]];
        }
        return res;
    }
};