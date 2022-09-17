class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let result = 0;

    for (let i = 0; i < key.length; i++) {
      result = (result + key.charCodeAt(i) * i) % this.data.length;
    }

    return result;
  } // O(N)

  set(key, value) {
    let address = this._hash(key);

    if (!this.data[address]) {
      this.data[address] = []; // { 'hash': [] };
    }

    this.data[address].push([key, value]); // { 'hash': [ [ key, value ] ] }

    return this.data;
  } // O(1)

  get(key) {
    const address = this._hash(key);
    const currentBucket = this.data[address]; // { 'hash': [ [ key, value ] ] }

    if (currentBucket) {
      for (let i = 0; i < currentBucket.length; i++) {
        // currentBucket will always have length of 2;
        if (currentBucket[i][0] === key) return currentBucket[i][1]; // if currentBucket[i]['key'] equals key (grapes), returns currentBucket[i][value] (10000)
      }
    }

    return undefined;
  } // O(N)

  keys() {
    const keysArray = [];

    for (let i = 0; i < this.data.length; i++) {
      if (this.data[i]) {
        keysArray.push(this.data[i][0][0]); // { You're looping through a massive array (well, it can be), then you're inside the index of this array, and you have another array. So, you need to pick the first index, which is the key, so Array[i][0][0] }
      }
    }

    return keysArray;
  }
}

const myHashTable = new HashTable(50);

myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
