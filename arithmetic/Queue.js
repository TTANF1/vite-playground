class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.list = {};
  }

  enqueue(val) {
    this.list[this.count] = val;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.list[this.lowestCount];
    delete this.list[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.list[this.lowestCount];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  clear() {
    while (this.isEmpty()) {
      this.dequeue();
    }
  }

  size() {
    return this.count - this.lowestCount;
  }

  toString() {
    if (this.isEmpty()) {
      return '';
    }
    let objString = `${this.list[this.lowestCount]}`;
    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString},${this.list[i]}`;
    }
    return objString;
  }
}

const que = new Queue();
que.enqueue(1);
que.enqueue(2);
que.enqueue(3);
console.log(que.list);
console.log(que.size());
que.dequeue();
console.log(que.list);
console.log(que.size());
que.enqueue(4);
console.log(que.list);
console.log(que.size());
setTimeout(() => {
  que.dequeue();
  console.log(que.list);
  console.log(que.size());
}, 1000);
