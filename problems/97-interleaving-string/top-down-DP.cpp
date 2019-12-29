/**
 * Top-down DP
 */

#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <unordered_set>
using namespace std;

class Solution {
public:
    bool isInterleave(string a, string b, string c) {
        if (a.size() + b.size() != c.size()) return false;

        s1 = a;
        s2 = b;
        s3 = c;
        cache.clear();
        return helper(0, 0);
    }

    bool helper (int i, int j) {
        int k = i + j;
        if (k == s3.size()) return true;

        const int key = i * (s2.size() + 1) + j;
        if (cache.count(key)) return false;

        // 选择1：i前进
        if (i < s1.size() && s1[i] == s3[k]) {
            if (helper(i + 1, j)) return true;
        }
        // 选择2：j前进
        if (j < s2.size() && s2[j] == s3[k]) {
            if (helper(i, j + 1)) return true;
        }
        cache.insert(key);
        return false;
    }

private:
    string s1, s2, s3;
    unordered_set<int> cache;
};

int main () {
    ifstream cin("in");
    Solution s = Solution();
    int t;
    cin >> t;
    while (t--) {
        string a, b, c;
        cin >> a >> b >> c;
        cout << s.isInterleave(a, b, c) << endl;
    }
    return 0;
};
