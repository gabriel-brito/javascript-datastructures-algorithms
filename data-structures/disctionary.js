function defaultToString(item) {
  if (item === null) return "NULL";

  if (item === undefined) return "UNDEFINED";

  if (typeof item === "string" || item instanceof String) {
    return `${item}`;
  }

  return item.toString();
}

class ValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
  }

  toString() {
    return `[#${this.key}: ${this.value}]`;
  }
}

class Dictionary {
  constructor(toStrFn = defaultToString) {
    this.toStrFn = toStrFn;
    this.table = {};
  }

  hasKey(key) {
    return this.table[this.toStrFn(key)] != null;
  }

  set(key, value) {
    if (key != null && value != null) {
      const tableKey = this.toStrFn(key);

      this.table[tableKey] = new ValuePair(key, value);

      return true;
    }

    return false;
  }
}
