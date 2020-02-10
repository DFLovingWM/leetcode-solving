/**
 * 枚举：枚举所有可简写的颜色
 */

class Solution {
public:
    string similarRGB(string color) {
        auto targetRgb = color2Rgb(color);
        int minDiff = INT_MAX;
        string minColor;

        for (int r = 0; r < 16; ++r) {
            for (int g = 0; g < 16; ++g) {
                for (int b = 0; b < 16; ++b) {
                    int red = r * 16 + r;
                    int green = g * 16 + g;
                    int blue = b * 16 + b;

                    int diff = (red - targetRgb[0]) * (red - targetRgb[0]) +
                        (green - targetRgb[1]) * (green - targetRgb[1]) +
                        (blue - targetRgb[2]) * (blue - targetRgb[2]);
                    if (diff < minDiff) {
                        minDiff = diff;
                        minColor = rgb2Color({ red, green, blue });
                    }
                }
            }
        }

        return minColor;
    }

    string rgb2Color(vector<int> rgb) {
        string res("#");
        for (int n : rgb) {
            res += decimal2Hex(n);
        }
        return res;
    }

    vector<int> color2Rgb(string &color) {
        vector<int> res;
        res.push_back(hex2Decimal(color.substr(1, 2)));
        res.push_back(hex2Decimal(color.substr(3, 2)));
        res.push_back(hex2Decimal(color.substr(5, 2)));
        return res;
    }

    string decimal2Hex(int n) {
        if (n == 0) return "00";

        string res;
        for (; n; n /= 16) {
            int tmp = n % 16;
            if (tmp < 10) {
                res += (tmp + '0');
            } else {
                res += (tmp - 10 + 'a');
            }
        }
        return res;
    }

    int hex2Decimal(string s) {
        int res = 0;
        for (char ch : s) {
            int n = (ch >= 'a' ? ch - 'a' + 10 : ch - '0');
            res = res * 16 + n;
        }
        return res;
    }
};