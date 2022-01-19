import {
  filter,
  map,
  Observable,
  of,
  fromEvent,
  from,
  EMPTY,
  timer,
  interval,
  take,
  BehaviorSubject,
} from 'rxjs';

const observer = {
  next(val) {
    console.log(val);
  },
  error(err) {
    console.error('something wrong occurred: ' + err);
  },
  complete() {
    console.log('complete');
  },
};

const subject = new BehaviorSubject(4); // 0 is the initial value
subject.subscribe({
  next: v => console.log(`observerA: ${v}`),
});

subject.next(1);
subject.next(2);

subject.subscribe({
  next: v => console.log(`observerB: ${v}`),
});

subject.next(3);

/* const observerA = {
  next: value => console.log('A next: ' + value),
  error: error => console.log('A error: ' + error),
  complete: () => console.log('A complete!'),
};
const observerB = {
  next: value => console.log('B next: ' + value),
  error: error => console.log('B error: ' + error),
  complete: () => console.log('B complete!'),
};
const numbers = interval(1000);
const source = numbers.pipe(take(3));
source.subscribe(observerA);
setTimeout(() => {
  source.subscribe(observerB);
}, 1000); */

/* const source = interval(1000)
var click = fromEvent(document.body, 'click')
var example = source.takeUntil(click)

example.subscribe(observer) */

// 第一個參數代表要發出第一個值的等待時間(ms)，第二個參數代表第一次之後發送值的間隔時間
/* const subscription = timer(1000, 2000).subscribe(observer)
setTimeout(() => {
  subscription.unsubscribe()
}, 5000) */

// EMPTY.subscribe(observer) // 直接执行 complete

/* const source = from(
  new Promise((resolve, reject) => {
    // reject('wocao!')
    setTimeout(() => {
      resolve('Hello RxJS!')
      // promise resolve成功之后 还会触发 observer 的 complete
    }, 1000)
  })
)
source.subscribe(observer) */

/* const observable = new Observable(subscriber => {
  subscriber.next(1)
  subscriber.next(2)
  // throw new Error('some thing error..')
  subscriber.next(3)
  setTimeout(() => {
    subscriber.next(4)
    subscriber.complete()
  }, 1000)
})

console.log('just before subscribe')
observable.subscribe({
  next(x) {
    console.log('got value ' + x)
  },
  error(err) {
    console.error('something wrong occurred: ' + err)
  },
  complete() {
    console.log('done')
  },
})
console.log('just after subscribe') */

// of(1, 2, 3, 7, 33, 21, 13, 44, 16, 24)
//   .pipe(
//     filter(v => v % 2 === 0),
//     map(v => v + 1)
//   )
//   .subscribe(val => console.log('sub:' + val))

// const dom = document.createElement('div')
// fromEvent(dom, 'click').take(1).subscribe()
