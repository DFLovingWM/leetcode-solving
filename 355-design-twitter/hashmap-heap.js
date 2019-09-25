/**
 * HashMap + Heap
 * 时间：168ms
 * 空间：48.3MB
 */
var Twitter = function() {
  this.user2Feeds = new Map() // userId => 该user自己发的所有推文(List)
  this.user2Follows = new Map() // userId => 该user关注的所有人(Set)
};

// module.exports = Twitter

// 发说说
Twitter.prototype.postTweet = function(userId, tweetId) {
  if (!this.user2Feeds.has(userId)) this.user2Feeds.set(userId, [])
  this.user2Feeds.get(userId).push(new Feed(tweetId))
};

// 获取最近10条说说，倒序输出
Twitter.prototype.getNewsFeed = function(userId) {
  const lists = []
  // 我发的说说
  if (this.user2Feeds.has(userId) && this.user2Feeds.get(userId).length) {
    lists.push(this.user2Feeds.get(userId))
  }
  // 我关注的人发的说说
  if (this.user2Follows.has(userId)) {
    for (const uid of this.user2Follows.get(userId)) {
      if (this.user2Feeds.has(uid) && this.user2Feeds.get(uid).length) {
        lists.push(this.user2Feeds.get(uid))
      }
    }
  }

  // 从后往前合并K个链表，直到10个结点
  const T = 10
  const queue = new PriorityQueue((a, b) => a.feed.timestamp > b.feed.timestamp) // 时间更新的优先
  const index = Array.from({ length: lists.length }, (_, i) => lists[i].length - 1)
  for (let i = 0; i < lists.length; ++i) {
    queue.add(new Node(lists[i][index[i]], i))
  }
  const res = []
  while (res.length < T && !queue.empty()) {
    const { feed, listIndex } = queue.poll()
    res.push(feed.id)
    --index[listIndex]
    if (index[listIndex] >= 0) {
      queue.add(new Node(lists[listIndex][index[listIndex]], listIndex))
    }
  }
  return res
};

// 关注
Twitter.prototype.follow = function(followerId, followeeId) {
  if (followeeId === followerId) return

  if (!this.user2Follows.has(followerId)) this.user2Follows.set(followerId, new Set())
  this.user2Follows.get(followerId).add(followeeId)
};

// 取消关注
Twitter.prototype.unfollow = function(followerId, followeeId) {
  if (this.user2Follows.has(followerId)) {
    this.user2Follows.get(followerId).delete(followeeId)
  }
};

/**
 * 带时间戳的一条说说
 */
function Feed (id) {
  this.id = id
  this.timestamp = ++Feed.timestamp
}

Feed.timestamp = 0 // 全局时间戳

/**
 * 优先级队列中的结点
 */
function Node (feed, listIndex) {
  this.feed = feed
  this.listIndex = listIndex
}

// ========================= 以下是优先级队列的实现 =============================

/**
 * 将数组转化为堆
 */
function heapify (arr, comparator) {
  let heap = []
  for (const item of arr) {
    heapPush(heap, item, comparator)
  }
  return heap
}

/**
 * 将新元素插入堆，并维护堆的不变性
 */
function heapPush (heap, item, comparator) {
  // 尾部加入
  heap.push(item)

  // 调整堆（新元素在尾部，所以是bottom-up）
  let cur = heap.length - 1
  while (cur > 0) { // 只要不是root（就有parent需要比较）
    let parent = Math.floor((cur - 1) / 2)
    if (comparator(heap[cur], heap[parent])) { // 满足上位条件
      swap(heap, parent, cur)
      cur = parent
    } else {
      break
    }
  }
}

/**
 * 弹出最小元素，并维护堆的不变性
 */
function heapPop (heap, comparator) {
  // 头尾元素交换，为的是让最小元素从尾巴弹出
  swap(heap, 0, heap.length - 1)
  const result = heap.pop()

  // 调整堆（新元素在头部，所以是top-down）
  let cur = 0
  while (true) {
    let left = cur * 2 + 1
    let right = left + 1

    // 注：这个条件分支安排得非常完美！
    if (right < heap.length && comparator(heap[right], heap[cur]) && comparator(heap[right], heap[left])) { // 如果右子结点存在、并且满足上位条件
      swap(heap, right, cur)
      cur = right
    } else if (left < heap.length && comparator(heap[left], heap[cur])) { // (这个分支可以不考虑右子结点了)如果左子结点存在、并且满足上位条件
      swap(heap, left, cur)
      cur = left
    } else { // (这个分支可以不考虑右、左子结点了)
      break
    }
  }

  return result
}

function swap (arr, i, j) {
  [arr[i], arr[j]] = [arr[j], arr[i]]
}

// 优先级队列
class PriorityQueue {
  constructor (comparator) {
    this.heap = []
    // 比较函数，默认为小顶堆
    this.comparator = comparator || function (a, b) {
      return a < b
    }
  }

  size () {
    return this.heap.length
  }

  empty () {
    return this.size() === 0
  }

  init (arr) {
    heapify(arr, this.comparator)
  }

  // 插入元素，并维护堆
  add (n) {
    heapPush(this.heap, n, this.comparator)
  }

  // 查看顶元素
  peek () {
    if (this.heap.length === 0) return NONE
    return this.heap[0]
  }

  // 推出顶元素，并维护堆
  poll () {
    if (this.heap.length === 0) return NONE
    return heapPop(this.heap, this.comparator)
  }
}
