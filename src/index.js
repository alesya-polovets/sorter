class Sorter {
  constructor() {
    // your implementation
      this.arr = [];
      this.comparator = function (left, right) {
        return left - right;
      }
  }

  add(element) {
    // your implementation
      this.arr.push(element);
      return this.arr;
  }

  at(index) {
    // your implementation
      return this.arr[index];
  }

  get length() {
    // your implementation
      return this.arr.length;
  }

  toArray() {
    // your implementation
      return this.arr;
  }

  sort(indices) {
    // your implementation
      let result = [];
      if (indices[0] > indices[indices.length - 1]) {
        indices.reverse();
      }
      for (let i = 0; i < indices.length; i++) {
        result.push(this.arr[indices[i]]);
      }
      result.sort(this.comparator);
      for (let i = 0; i < indices.length; i++) {
        this.arr.splice(indices[i], 1, result[i]);
      }
  }

  setComparator(compareFunction) {
    // your implementation
    this.comparator=compareFunction;
  }
}

module.exports = Sorter;