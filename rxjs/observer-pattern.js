// 观察者模式
// 例 document.addEventListener('click', handler)

class Producer {
  constructor() {
    this.listenerList = []
  }
  addEventListener(listener) {
    if (typeof listener !== 'function') throw new Error('input function here')
    this.listenerList.push(listener)
  }
  removeEventListener(listener) {
    this.listenerList.splice(this.listenerList.indexOf(listener), 1)
    // this.listenerList.splice(
    //   this.listenerList.findIndex(l => l === listener),
    //   1
    // )
  }
  notify(message) {
    this.listenerList.forEach(listener => listener(message))
  }
}

var egghead = new Producer()

function listener1(message) {
  console.log(message + 'from listener1')
}

function listener2(message) {
  console.log(message + 'from listener2')
}

egghead.addEventListener(listener1)
egghead.addEventListener(listener2)

// egghead.removeEventListener(listener1)

egghead.notify('A new course!!')
