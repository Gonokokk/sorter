class Sorter {
  constructor() {
    this.result = [];
    this.comparator = (left, right) => left - right;
}

  add(element) {
    this.result.push(element);
  }

  at(index) {
    return this.result[index];
  }

  get length() {
    return this.result.length;
  }

  toArray() {
    return this.result;
  }

  sort(indices) {
    var sortArr = [];
    for(var i = 0; i < this.result.length; i++) {
      for(var j = 0; j < indices.length; j++) {
        if(indices[j] == i){
          sortArr.push(this.result[i]);
        }
      }
    }
    sortArr.sort(this.comparator);
    indices.sort(function(left, right) {
      return left - right;
})
    indices.forEach(element => {
      this.result[element] = sortArr.shift();
      return this.result;
})
}
  setComparator(compareFunction) {
    this.comparator = compareFunction; 
  }
}

module.exports = Sorter;
