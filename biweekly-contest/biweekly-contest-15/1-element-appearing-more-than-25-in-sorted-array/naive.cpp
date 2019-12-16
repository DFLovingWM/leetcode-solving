#include <vector>
using namespace std;

class Solution {
public:
    int findSpecialInteger(vector<int>& arr) {
        int limit = arr.size() / 4;
        int acc = 1;
        int i;
        for (i = 1; i < arr.size(); ++i) {
            if (arr[i] == arr[i - 1]) {
                ++acc;
            } else {
                if (acc > limit) return arr[i - 1];
                acc = 1;
            }
        }
        return arr[i - 1];
    }
};