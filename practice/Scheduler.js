export class Scheduler {
  constructor(maxNum) {
    this.taskList = [];
    this.count = 0;
    this.maxNum = maxNum;
  }

  async add(promiseCreator) {
    if (this.count >= this.maxNum) {
      await new Promise(resolve => {
        this.taskList.push(resolve);
      });
    }
    this.count++;
    const result = await promiseCreator();
    this.count--;
    if (this.taskList.length > 0) {
      this.taskList.shift()();
    }
    return result;
  }

  reset() {
    this.taskList = [];
    this.count = 0;
  }
}

const scheduler = new Scheduler(3);

const addTask = (v, i) =>
  scheduler.add(async () => {
    // fetch data
    const result = await new Promise(resolve => resolve(`res: ${i}`));
    console.log('%c [ result ]-35', 'font-size:13px; background:pink; color:#bf2c9f;', result);
  });

[1, 2, 3, 4, 5].forEach(addTask);
