// The Deque data structure, also know as the double-ended queue, is a special queue that allow us
// to insert and remove elements from the end or from the front of the queue.
// The Deque data structure implements both FIFO and LIFO principles.
// A Queue is an ordered collection of items that follows the First In, First Out (FIFO) principle.
// All methods from Queue data structure will be O(1) - Except the .toString() and addFront, that will (or can) be O(N)

class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  // O(1) or O(N)
  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    } else if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    } else {
      for (let i = this.count; i > 0; i--) {
        this.items[i] = this.items[i - 1];
      }
    }

    this.count++;
    this.lowestCount = 0;
    this.items[0] = element;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) return undefined;

    const result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.lowestCount++;

    return result;
  }

  removeBack() {
    if (this.isEmpty()) return undefined;

    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];

    return result;
  }

  peekFront() {
    if (this.isEmpty()) return undefined;

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) return undefined;

    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.size() === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) return undefined;

    let objString = `${this.items[this.lowestCount]}`;

    for (let i = this.lowestCount + 1; i < this.count; i++) {
      objString = `${objString}, ${this.items[i]}`;
    }

    return objString;
  }
}

const deque = new Deque();

console.log(deque.isEmpty()); // true

deque.addBack("John");
deque.addBack("Jack");

console.log(deque.toString()); // John, Jack

deque.addBack("Camila");

console.log(deque.toString()); // John, Jack, Camila

console.log(deque.size()); // 3

console.log(deque.isEmpty()); // false

deque.removeFront(); // remove John

console.log(deque.toString()); // Jack, Camila

deque.removeBack(); // Camila decides to leave

console.log(deque.toString()); // Jack

deque.addFront("John"); // John comes back for information.

console.log(deque.toString()); // John, Jack
