// A Stack is an ordered collection of items that follows the last in, first out (LIFO) principle.
// All methods from Stack (Object) data structure will be O(1) - Except the .toString(), that will be O(N)

class Stack {
  constructor() {
    this.count = 0;
    this.items = {};
  }

  push(element) {
    this.items[this.count] = element;
    this.count++;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  pop() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  clear() {
    this.items = {};
    this.count = 0;
  }

  toString() {
    if (this.isEmpty()) return "";

    let objString = `${this.items[0]}`;

    for (let i = 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

// Operations

const stack = new Stack();

console.log(stack.isEmpty()); // true

stack.push(5);
stack.push(8);

console.log(stack.peek()); // 8

stack.push(11);

console.log(stack.size()); // 3

console.log(stack.isEmpty()); // false

stack.push(15);

console.log(stack.size()); // 4

stack.pop();
stack.pop();

console.log(stack.size()); //2

console.log(stack.toString()); // "5, 8"

// Solving real life problems with Stacks.

// Converting decimal numbers to binary.

function decimalToBinary(decimalNumber) {
  const remainderStack = new Stack();
  let number = decimalNumber;
  let remainder = 0;
  let binaryString = "";

  while (number > 0) {
    remainder = Math.floor(number % 2);
    remainderStack.push(remainder);
    number = Math.floor(number / 2);
  }

  while (!remainderStack.isEmpty()) {
    binaryString += remainderStack.pop().toString();
  }

  return binaryString;
}

console.log(decimalToBinary(233)); // 11101001
console.log(decimalToBinary(10)); // 1010
console.log(decimalToBinary(1000)); // 1111101000

// The base converter algorithm

function baseConverter(decimalNumber, base) {
  const remainderStack = new Stack();
  const digits = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let number = decimalNumber;
  let remainder = 0;
  let baseString = "";

  if (!(base >= 2 && base <= 36)) return "";

  while (number > 0) {
    remainder = Math.floor(number % base);
    remainderStack.push(remainder);
    number = Math.floor(number / base);
  }

  while (!remainderStack.isEmpty()) {
    baseString += digits[remainderStack.pop()];
  }

  return baseString;
}

console.log(baseConverter(100345, 2)); // 11000011111111001
console.log(baseConverter(100345, 8)); // 303771
console.log(baseConverter(100345, 16)); // 187F9
console.log(baseConverter(100345, 35)); // 2Bw0
