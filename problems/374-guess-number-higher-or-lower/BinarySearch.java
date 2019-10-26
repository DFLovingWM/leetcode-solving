/**
 * 二分查找（bisectLeft）：
 * 如果目标值更小(或相等)，左边；否则右边
 */
public class Solution extends GuessGame {
  public int guessNumber(int n) {
      return bisectLeft(n);
  }
  
  private int bisectLeft (int n) {
      int left = 1;
      int right = n;
      
      while (left < right) {
          int middle = left + (right - left) / 2;
          if (guess(middle) == 1) { // 目标数字比较大
              left = middle + 1;
          } else {
              right = middle;
          }
      }
      
      return left;
  }
}