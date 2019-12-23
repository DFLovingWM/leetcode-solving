#include <iostream>
#include <vector>
#include <map>
using namespace std;

class Solution {
public:
    bool isPossibleDivide(vector<int>& nums, int k) {
        const int len = nums.size();
        if (len % k != 0) return false;

        map<int, int> freq;
        for (int num : nums) {
            ++freq[num];
        }

        // 贪心：从最小拿
        while (freq.size() > 0) {
            int min = (freq.begin())->first;
            for (int i = min; i < min + k; ++i) {
                if (!freq.count(i)) return false;
                --freq[i];
                if (freq[i] == 0) {
                    freq.erase(i);
                }
            }
        }
        return true;
    }
};