/**
 * LPS - DP
 */
var longestPalindrome = function(A, B) {
  const S = A + B;
  const [a, b] = [A.length, B.length];
  const n = a + b;
  const dp = Array.from({ length: n }, () => Array.from({ length: n }, () => 0)); // 记录值
  const pos = Array.from({ length: n }, () => Array.from({ length: n }, () => null)); // 记录范围
  let res = 0;

  for (let i = n - 1; i >= 0; --i) { // 逆序
    dp[i][i] = 1;
    pos[i][i] = [i, i];

    for (let j = i + 1; j < n; ++j) { // 顺序
      if (S[i] === S[j]) {
        dp[i][j] = dp[i + 1][j - 1] + 2;
        pos[i][j] = [i, j];
      } else {
        if (dp[i + 1][j] >= dp[i][j - 1]) {
          dp[i][j] = dp[i + 1][j];
          pos[i][j] = pos[i + 1][j];
        } else {
          dp[i][j] = dp[i][j - 1];
          pos[i][j] = pos[i][j - 1];
        }
      }

      const [l, r] = pos[i][j];
      if (l < a && r >= a) {
        res = Math.max(res, dp[i][j]);
      }
    }
  }

  return res;
};

[
  ['cacb', 'cbba'],
  ['ab', 'ab'],
  ['aa', 'bb'],
  [
    "fwjltqemdtmlhadgwymcasllmdetyfggohqfoiphmaadfbhkkdnpeubislwgrkpejxjalpaytzhhbrvrjfpjrcgdfsakeqxexbgfhevhruhhwxsjqtnhxsemsvvxsyevfmmqevdsqergvfphpckbpeoeqyrmmdzafgtshitmibbpoucyynengtaaixahewgvpsiufqxgilmtazymycrxnjajdgpdluhvtftaummsbfureuiptxmedlxothitffouogmucgwznfobcbveengtmqdknzvzzysmjwgnbbykimpjckyzsebcbfpknxbodxpigmfnhxlmywdwptmkzuxxuvhbcixbsgngrtxgbcjuyctaqvzayvzeofbubuyhhgraohnhuelbqrlnbzlxahpsmgwpiflujdazsqrmrmtssudexfiulbyzjgmuucobevbeeofefsekshtdlidbfdbtywhbjerawvfobnadfcbzbkptozixprdqzvrzthhjyrnpajyswpogxvmefzfckgpwadkxzaqktvhzegtqlgxkfynowfmllyjigzldltvwfxseifqqishhuoguviviuvpkfljauaqtmynjwleevsdcsstcydfhlbhlnnyriomuzaxrvwlyyowsmclsudlojdnyjzvpnoegzltxgmeqkbfqdcutwgaupzkpnftkxhbyjcabavxohtkktkdejziuyzrctmkpukfsjbjznarrtgeyvdxrsoyikddlnxuonmbtrkadgmhwjpnvlmoonczsjpjpcevcdvuxqmyfylyfcnqahzynsfqcobglkdehuapfpjgsiztsiobjkcpopbloplalgwzeccjnnkivvqvidmhxcpzefrqrlhjcyyfolyzogmbjiakufyjytmjgjwylwpjvixougyggjmbzarudlmlyhvcxbhuqurxlznwkkrjbyiioumtsmybrtzvibqyvhibxmvgkoiyzmjdrqvyygzfq",
    "oiaynrbkfkbgzynphprvucylwnfwsrvldkcgbdedgrktzeomjayyoelproupvxomxcbrrluekpnaldblhgvbxumjxqxmuvbebygwhsmxtklotlbzbdcxzscebazdanyksvhrqhgootomabyzjgjwhikissvzywlcirgnfsneshmakmcwnusdqphpcyfjsvwisklwvhrytmdjhwimrsozirggxfrghjuzccxihgslgeuemocqseggpoekbbzvgqwegzvsyetzyobskohgcmicalqwfkjppidojlqgncxyjyhyxnyidgsginlaaupkdlwhrwcddbnjbstblfkokauobwqquuuybmdznuvqzdvzlmndejmhmotuvxsumxrpnfduxvbhdbplfxhsuupswbynzolzsxsiwfgtphokgdyfxfbzdwnqdvgytztmhmcnloovrntdzwoawrvnbzbmvbuonkbstopivnvxpwzfsscekvcmhbhktjvgloxvgqgddinunuvjheziihadvzbyvkqedtvxotksicthjvnjffujhfehovplvaskmblxhkypaplqccyeboclwziheiqxulmpufpzkrxngismorycagltcbftptpmuhnplxohaqyfufofshdbmuqbwgkeswgvxesmcyeovixplrwrhwbfzlireqzxkcqpehhgxlhtztwkdwkxteqieolyimboxqintkbvyuzljzhxbxubqvguigdlpsydragglmdghtfzdohhsalalbfcpzgrjbivoathyfqenlsfyzupoktcydtystmbldgownnvgvbsmehlubxlkjgbkogjapbnblrjnjnqvibmugubxgddxbkxgjxnspbvykudcztsyazwlrlvybenfxdiywneagsnnjyknfyrwiwtdebbocwqrijtwrfphfawjridbsxfqalzurcttsstalqeqaqfnmyoanqccafzkqmjfwhaoaugyhqvesbctjgc"
  ]
].forEach(A => {
  console.log(longestPalindrome(...A))
})