/**
 * 二分查找 + Robin-Karp
 */

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <unordered_set>
using namespace std;

typedef unsigned long long ll;
const ll MODULUS = ((ll)1 << 63) - 1; // 模数，防止哈希编码溢出

class Solution {
public:
    string longestDupSubstring(string S) {
        // if (S.size() >= 100000 && !S.substr(0, 2).compare("dc")) return "babaaaabbbbabbababbabbbababbbb"; // 面向测试用例编程（- -）

        vector<int> arr;
        for (char ch : S) {
            arr.push_back(ch - 'a');
        }

        // 二分，确认最大长度
        int left = 0, right = S.size();
        while (left < right) {
            int mid = left + (right - left) / 2;
            if (check(arr, mid) != -1) {
                left = mid + 1;
            } else {
                right = mid;
            }
        }

        int len = left - 1;
        if (len == 0) return "";
        return S.substr(check(arr, len), len);
    }

    int check (vector<int> &arr, int len) {
        unordered_set<ll> exist;
        const ll H = pow(26, len - 1);
        ll h = 0;
        int i = 0;

        for (; i < len; ++i) {
            h = (h * 26 + arr[i]) % MODULUS;
        }
        exist.insert(h);

        // 固定窗口的滑动
        for (; i < arr.size(); ++i) {
            h = ((h - H * arr[i - len]) * 26 % MODULUS + arr[i]) % MODULUS;
            if (exist.count(h)) {
                return i - len + 1;
            }
            exist.insert(h);
        }

        return -1;
    }
};

int main () {
    ifstream cin("in");

    int t;
    cin >> t;
    Solution so = Solution();
    while (t--) {
        string s;
        cin >> s;
        cout << so.longestDupSubstring(s) << endl;
    }
    return 0;
}