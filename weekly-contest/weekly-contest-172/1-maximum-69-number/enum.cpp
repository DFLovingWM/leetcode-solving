class Solution {
public:
    int maximum69Number (int num) {
        vector<int> nums = {num};
        string s = to_string(num);
        for (int i = 0; i < s.size(); ++i) {
            char ch = s[i];
            if (ch == '9') {
                s[i] = '6';
            } else {
                s[i] = '9';
            }
            nums.push_back(stoi(s));
            s[i] = ch;
        }
        return *max_element(nums.begin(), nums.end());
    }
};