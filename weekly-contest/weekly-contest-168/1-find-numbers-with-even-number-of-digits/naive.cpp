#include <iostream>
#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    int findNumbers(vector<int>& nums) {
        int even = 0;
        for (int n : nums) {
            if (calDigit(n) % 2 == 0) {
                ++even;
            }
        }
        return even;
    }
private:
    int calDigit (int x) {
        int res = 0;
        while (x) {
            x /= 10;
            ++res;
        }
        return res;
    }
};