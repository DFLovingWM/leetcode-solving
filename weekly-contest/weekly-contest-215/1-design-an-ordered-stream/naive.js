var OrderedStream = function(n) {
  this.arr = Array.from({ length: n + 1 }, () => '');
  this.ptr = 1;
};

// O(N)
OrderedStream.prototype.insert = function(id, value) {
  this.arr[id] = value;
  const res = [];
  for (; this.arr[this.ptr]; ++this.ptr) {
    res.push(this.arr[this.ptr]);
  }
  return res;
};

// const os= new OrderedStream(5);
// os.insert(3, "ccccc");