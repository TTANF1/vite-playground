function* getNumbers(words) {
  for (let word of words) {
    if (/^[0-9]+$/.test(word)) {
      yield parseInt(word, 10)
    }
  }
}

const iterator = getNumbers('30 天精通 RxJS (04)')

iterator.next()
// { value: 3, done: false }
iterator.next()
// { value: 0, done: false }
iterator.next()
// { value: 0, done: false }
iterator.next()
// { value: 4, done: false }
iterator.next()
// { value: undefined, done: true }


/**
 * Observer 和 iterator 有个共同点，都是属于渐进式的取得数据
 * Observer 是由 Producer push data 给到每个监听者
 * Iterator 是 Consumer 自己去 pull 获取数据的更新
 */