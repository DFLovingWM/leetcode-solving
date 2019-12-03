#include <deque>
#include <iostream>
using namespace std;

/**
 * 滑动窗口最大值，使用单调(递减的)deque
 */
void printKMax(int arr[], int n, int k) {
  deque<int> win;
  for (int i = 0; i < n; ++i) {
    if (win.size() > 0 && win.front() == i - k) win.pop_front(); // 丢弃旧元素
    while (win.size() > 0 && arr[win.back()] <= arr[i]) { // 维护单调性
      win.pop_back();
    }
    win.push_back(i); // 加入新元素
    if (i >= k - 1) cout << arr[win.front()] << " ";
  }
  cout << endl;
}

int main() {
  int t;
  cin >> t;

  while (t--) {
    int n, k;
    cin >> n >> k;
    int arr[n];
    for (int i = 0; i < n; i++) {
      cin >> arr[i];
    }
    printKMax(arr, n, k);
  }

  return 0;
}
