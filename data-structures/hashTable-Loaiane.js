// HashTable from Loaiane's Book (Javascript Data structures and algorithms).

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

function defaultToString(item) {
  if (item === null) return "NULL";

  if (item === undefined) return "UNDEFINED";

  if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

class HashTable {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  loseloseHashCode(key) {
    if (typeof key === "number") {
      return key;
    }
    const tableKey = this.toStrFn(key);
    let hash = 0;

    for (let i = 0; i < tableKey.length; i++) {
      hash += tableKey.charCodeAt(i);
    }

    return hash % 37;
  }

  hashCode(key) {
    return this.loseloseHashCode(key);
  }

  put(key, value) {
    if (key != null && value != null) {
      const position = this.hashCode(key);

      this.table[position] = new ValuePair(key, value);

      return true;
    }

    return false;
  }

  get(key) {
    const valuePair = this.table[this.hashCode(key)];

    return valuePair == null ? undefined : valuePair.value;
  }

  remove(key) {
    const hash = this.hashCode(key);
    const valuePair = this.table[hash];

    if (valuePair != null) {
      delete this.table[hash];

      return true;
    }

    return false;
  }
}
