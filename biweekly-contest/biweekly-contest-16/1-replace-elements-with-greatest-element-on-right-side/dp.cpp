#include <vector>
#include <string>
#include <algorithm>
using namespace std;

class Solution {
public:
    vector<int> replaceElements(vector<int>& arr) {
        const int n = arr.size();
        vector<int> res(n, -1);
        for (int i = n - 2; i >= 0; --i) {
            res[i] = max(res[i + 1], arr[i + 1]);
        }
        return res;
    }
};