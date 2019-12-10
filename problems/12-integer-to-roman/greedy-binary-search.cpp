#include <vector>
#include <string>
using namespace std;

class Solution {
public:
    string intToRoman(int num) {
        vector<pair<int, string>> arr;
        arr.push_back(make_pair(1, "I"));
        arr.push_back(make_pair(4, "IV"));
        arr.push_back(make_pair(5, "V"));
        arr.push_back(make_pair(9, "IX"));
        arr.push_back(make_pair(10, "X"));
        arr.push_back(make_pair(40, "XL"));
        arr.push_back(make_pair(50, "L"));
        arr.push_back(make_pair(90, "XC"));
        arr.push_back(make_pair(100, "C"));
        arr.push_back(make_pair(400, "CD"));
        arr.push_back(make_pair(500, "D"));
        arr.push_back(make_pair(900, "CM"));
        arr.push_back(make_pair(1000, "M"));

        string res;
        vector<pair<int, string>>::iterator upIter = arr.end();

        while (num) {
            upIter = upper_bound(arr.begin(), upIter, num, [&](int x, const pair<int, string> p) {
                return x < p.first;
            });
            pair<int, string> p = (*(upIter - 1));
            num -= p.first;
            res += p.second;
        }

        return res;
    }
};