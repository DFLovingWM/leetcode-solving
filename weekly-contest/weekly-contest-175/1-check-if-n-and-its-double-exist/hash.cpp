class Solution {
public:
    bool checkIfExist(vector<int>& arr) {
        unordered_set<int> exist;
        for (int n : arr) {
            if (exist.count(n * 2)) return true;
            if (n % 2 == 0 && exist.count(n / 2)) return true;
            exist.insert(n);
        }
        return false;
    }
};