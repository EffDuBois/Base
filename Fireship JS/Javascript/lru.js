/*
## LRU Interview Question

Create a data structure that implements the requirements
of a Least Recently Used (LRU) cache with 0(1) average
time complexity.

- Initialize an object with a maxium capacity of elements.
- `getItem` Return the value of the key. Update cache with
the most recently used key.
- `putItem` Create or update a key value pair in the
cache. Evict the least recently used key if the size of
keys exceeds the max capacity.
*/

class lru {
  constructor(capacity) {
    this.capacity = capacity;
    this.cache = new Map();
  }
  getItem(key) {
    const item = this.cache.get(key);
    if (item) {
      this.cache.delete(key);
      this.cache.set(key, item);
    }
    return item;
  }

  putItem(key, value) {
    if (this.cache.get(key)) {
      this.cache.delete(key);
    }
    if (this.cache.size === this.cache.capacity) {
      this.cache.delete(this.cache.oldestItem);
    }
    this.cache.set(key,value);
  }

  get oldestItem() {
    return this.cache.keys().next().value;
  }
}

cache = new lru(5);
cache.putItem(1,1);
cache.putItem(2,2);
cache.putItem(3,3);
cache.putItem(4,4);
cache.putItem(5,5);
cache.putItem(6,6);
console.log(cache.getItem(1));
