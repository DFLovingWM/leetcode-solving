class Solution {
public:
    int minSetSize(vector<int>& arr) {
        unordered_map<int, int> freq;
        for (auto n : arr) {
            ++freq[n];
        }

        map<int, int> freq2Count; // 频率 => 数字种类数
        for (auto p : freq) {
            ++freq2Count[p.second];
        }

        int threshold = arr.size() / 2;
        int res = 0, cnt = 0;
        for (auto it = freq2Count.rbegin(); it != freq2Count.rend(); ++it) {
            int numFreq = it->first, numCount = it->second;
            for (int i = 0; i < numCount; ++i) {
                ++res;
                cnt += numFreq;
                if (cnt >= threshold) return res;
            }
        }
        return res;
    }
};