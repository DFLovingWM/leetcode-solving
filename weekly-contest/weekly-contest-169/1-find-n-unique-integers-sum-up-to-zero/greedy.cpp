#include <vector>
using namespace std;

class Solution {
public:
    vector<int> sumZero(int n) {
        vector<int> res(n, 0);
        int sum = 0;
        for (int i = 1; i < n - 1; ++i) {
            res[i] = i;
            sum += res[i];
        }
        res[n - 1] = -sum;
        return res;
    }
};