/**
 * 回溯
 * 
 * 时间：80ms
 */
var restoreIpAddresses = function (S) {
    const ips = []

    function backtrack(start, ip) {
        if (ip.length === 4 && start == S.length) {
            ips.push(ip.join('.'));
            return;
        }
        if (ip.length === 4 || start == S.length) {
            return;
        }

        if (S[start] === '0') { // 以0开头，只能是0
            ip.push(0);
            backtrack(start + 1, ip);
            ip.pop();
        } else { // 一般情况
            let n = 0;
            for (let i = start; i < S.length; ++i) {
                n = n * 10 + Number(S[i]);
                if (n >= 0 && n <= 255) {
                    ip.push(n);
                    backtrack(i + 1, ip);
                    ip.pop();
                } else {
                    break; // 超过255，可以直接break，找下一个数字
                }
            }
        }
    }

    backtrack(0, []);
    return ips;
};