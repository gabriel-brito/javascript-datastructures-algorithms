// A Queue is an ordered collection of items that follows the First In, First Out (FIFO) principle.
// All methods from Queue data structure will be O(1) - Except the .toString(), that will be O(N)

class Queue {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  enqueue(element) {
    this.items[this.count] = element;
    this.count++;
  }

  dequeue() {
    if (this.isEmpty()) return undefined;

    const result = this.items[this.lowestCount];

    delete this.items[this.lowestCount];

    this.lowestCount++;

    return result;
  }

  peek() {
    if (this.isEmpty()) return undefined;

    return this.items[this.lowestCount];
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

const queue = new Queue();

console.log(queue.isEmpty()); // true;

queue.enqueue("John");
queue.enqueue("Jack");

console.log(queue.toString()); // 'John, Jack'

queue.enqueue("Camila");

console.log(queue.toString()); // 'John, Jack, Camila'
console.log(queue.size()); // 3
console.log(queue.isEmpty()); // false

queue.dequeue();
queue.dequeue();

console.log(queue.toString()); // 'Camila'

// Real life problems with Queue Class

function hotPotato(personsList, num) {
  const queue = new Queue();
  const eliminatedList = [];

  for (let i = 0; i < personsList.length; i++) {
    queue.enqueue(personsList[i]);
  }

  while (queue.size() > 1) {
    for (let i = 0; i < num; i++) {
      queue.enqueue(queue.dequeue());
    }

    eliminatedList.push(queue.dequeue());
  }

  return {
    eliminated: eliminatedList,
    winner: queue.dequeue(),
  };
}

const names = ["John", "Jack", "Camila", "Ingrid", "Carl"];
const result = hotPotato(names, 7);

result.eliminated.forEach((name) =>
  console.log(`${name} was eliminated from the Hot Potato game.`)
);

console.log(`The winner is: ${result.winner}`);
