/**
 * keep-alive 的缓存机制
 */
export class LRUCache {
  capacity: number;
  cache: Map<number, number | null>;

  constructor(capactiy: number) {
    this.capacity = capactiy;
    this.cache = new Map();
  }

  get(key: number) {
    if (this.cache.has(key)) {
      // 把使用到的节点更新到队首
      const value = this.cache.get(key);
      this.cache.delete(key);
      this.cache.set(key, value);
      return value;
    }
    return -1;
  }

  put(key: number, value: number) {
    if (this.cache.has(key)) {
      this.cache.delete(key);
    } else if (this.cache.size >= this.capacity) {
      this.cache.delete(this.cache.keys().next().value);
    }
    this.cache.set(key, value);
  }
}
