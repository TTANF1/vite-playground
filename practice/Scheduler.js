export class Scheduler {
  constructor(maxNum) {
    this.cacheList = [];
    this.count = 0;
    this.maxNum = maxNum;
  }

  // action1 只限制了第一次并发请求的数量，后续正常请求
  async add(promiseCreator) {
    // 当限制数量到达的时候
    // 把后续的 promise 放入 cacheList
    // forEach 执行完之后便结束第一个 Setp，将结果返回
    if (this.count >= this.maxNum) {
      // 卡住当前最大并发后面的 fetch，等弹出 cache的 resolve 执行了便可继续向下执行
      await new Promise(resolve => {
        this.cacheList.push(resolve);
      });
    }
    this.count++;
    // Setp: stop1
    const result = await promiseCreator();
    this.count--;
    if (this.cacheList.length > 0) {
      this.cacheList.shift()();
    }
    return result;
  }

  reset() {
    this.cacheList = [];
    this.count = 0;
  }
}

const scheduler = new Scheduler(3);

const addTask = (v, i) =>
  scheduler.add(async () => { // stop1
    // fetch data
    const result = await new Promise(resolve => resolve(`res: ${v}`));
    // 上一行代码产生了 stop1，所以会等 stop1 resolve完成才运行后面的代码
    console.log('%c [ result ]-35', 'font-size:13px; background:pink; color:#bf2c9f;', result);
  });

// 这里的 forEach 是同步执行的，所有会一次性调用 10 次 addTask
[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].forEach(addTask);
