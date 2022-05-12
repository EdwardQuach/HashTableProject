class KeyValuePair {
  constructor(key, value) {
    this.key = key;
    this.value = value;
    this.next = null;
  }
}

class HashTable { // get O(1), set O(1), deleteKey O(1)

  constructor(numBuckets = 8) {
    this.count = 0;
    this.capacity = numBuckets;
    this.data = new Array(this.capacity).fill(null);
  }

  hash(key) {
    let hashValue = 0;

    for (let i = 0; i < key.length; i++) {
      hashValue += key.charCodeAt(i);
    }

    return hashValue;
  }

  hashMod(key) {
    // Get index after hashing
    return this.hash(key) % this.capacity;
  }


  insert(key, value) {
    const index = this.hashMod(key);

    let current = this.data[index];

    while(current && current.key !== key) current = current.next;

    if (current) current.value = value;
    else {
      const newPair = new KeyValuePair(key, value)
      if (this.data[index]) {
        newPair.next = this.data[index];
        this.data[index] = newPair;
      } else {
        this.data[index] = newPair;
      }
      this.count++;
    }
  }


  read(key) {
    const index = this.hashMod(key);
    let current = this.data[index];
    while(current) {
      if(current.key===key){
        return current.value;
      }
      current=current.next;
    }
    return undefined;
  }


  resize() {
    this.capacity *= 2;
    let arr = this.data;
    this.data = new Array(this.capacity).fill(null);
    this.count = 0;
    for(let ele of arr){
      let current = ele.next;
      while(current){
        this.insert(current.key, current.value);
        current=current.next;
      }
      this.insert(ele.key, ele.value);
    } 
  }


  delete(key) {
    const index = this.hashMod(key);
    let current = this.data[index];
    while(current) {
      if(current.key === key){  
        current.value = undefined;
        this.count--;
      }
      current = current.next;
    }
    return `Key not found`
  }
}


module.exports = HashTable;
