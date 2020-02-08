/**
 * 哈希
 * 
 * 时间：`O(NL)`, 4ms
 */

class Solution {
public:
    int uniqueMorseRepresentations(vector<string>& words) {
        const vector<string> mapping = {".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."};
        unordered_set<string> codeSet; // 哈希
        for (auto &word : words) {
            string code;
            for (char ch : word) {
                code += mapping[ch - 'a'];
            }
            codeSet.insert(code);
        }
        return codeSet.size();
    }
};