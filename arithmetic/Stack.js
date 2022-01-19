// const _list = Symbol('stackList');
class Stack {
  #list = [];
  constructor() {}

  push(item) {
    this.#list.push(item);
  }

  pop() {
    return this.#list.pop();
  }

  peek() {
    return this.#list[this.#list.length - 1];
  }

  isEmpty() {
    return this.#list.length === 0;
  }

  clear() {
    // this.#list = [];
    while (!this.isEmpty()) this.#list.pop();
  }

  size() {
    return this.#list.length;
  }
}

/* const ss = new Stack();
console.log(ss);
console.log(Object.getOwnPropertyNames(ss));
ss._list.push(11);
console.log(ss._list); */

function decimalToBinary(decNumber) {
  const stack = new Stack();
  let rem;
  let number = decNumber;
  let result = '';
  while (number > 0) {
    rem = Math.floor(number % 2);
    stack.push(rem);
    number = Math.floor(number / 2);
  }
  while (!stack.isEmpty()) {
    result += stack.pop();
  }
  return result;
}

console.log(decimalToBinary(10));
