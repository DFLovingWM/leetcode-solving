using ll = long long;

class Solution {
public:
    int makeStringSorted(string s) {
        int n = s.size();
        int mod = 1e9 + 7;

        vector<ll> fac(n + 1);
        vector<ll> facInv(n + 1);
        fac[0] = facInv[0] = 1;
        for (int i = 1; i <= n; ++i) {
            fac[i] = fac[i - 1] * i % mod;
            facInv[i] = quickMul(fac[i], mod - 2, mod);
        }

        vector<int> freq(26);
        for (auto ch : s) {
            ++freq[ch - 'a'];
        }

        ll res = 0;
        for (int i = 0; i < n - 1; ++i) {
            int c = s[i] - 'a';
            ll rank = 0;
            for (int ch = 0; ch < c; ++ch) {
                rank += freq[ch];
            }

            ll curr = rank * fac[n - i - 1] % mod;
            for (int ch = 0; ch < 26; ++ch) {
                curr = curr * facInv[freq[ch]] % mod;
            }
            res = (res + curr) % mod;

            --freq[c];
        }
        return res;
    }
private:
    ll quickMul(ll x, ll y, int mod) {
        ll res = 1;
        ll mul = x;
        for (; y; y >>= 1) {
            if (y & 1) {
            res = res * mul % mod;
            }
            mul = mul * mul % mod;
        }
        return res;
    }
};