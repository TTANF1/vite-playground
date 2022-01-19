import { Observable, takeWhile, repeatWhen } from 'rxjs'

/**
 * 一个待完成的任务id list
 * 轮询请求 更新完成的id
 */
const taskList = {
  0: 'Created',
  1: 'Executing',
  2: 'Created',
  3: 'Executing',
  4: 'Finished',
}
function changeFn() {
  const cKey = Object.keys(taskList).find(
    v => taskList[v] === 'Executing' || taskList[v] === 'Created'
  )
  taskList[cKey] = 'Finished'
  return { ...taskList }
}
// function pollingGetTaskStatus(list) {
//   let ids = list;
//   pollingtimer.value = setInterval(async () => {
//     if (!ids.length) {
//       return clearInterval(pollingtimer.value);
//     }
//     const data = await getAsrJobStatusApi({
//       ids: ids.join(','),
//     });
//     ids = Object.keys(data).filter((v) => data[v] === 'Executing' || data[v] === 'Created');
//     if (Object.keys(data).some((v) => data[v] === 'Finished')) {
//       emit('badge', true);
//     }
//   }, 5000);
// }

let ids = [0, 1, 2, 3, 4]
// const observable = new Observable(subscriber => {
//   setInterval(() => {
//     const data = await getAsrJobStatusApi({
//       ids: ids.join(','),
//     })
//     ids = Object.keys(data).filter(v => data[v] === 'Executing' || data[v] === 'Created')
//     subscriber.next(ids)
//   }, 3000)
// })
// observable.subscribe({
//   next(val) {},
//   complete() {},
// })

const source = new Observable(observer => {
  console.log('-------start--------')
  setTimeout(() => {
    const data = changeFn()
    ids = Object.keys(data).filter(v => data[v] === 'Executing' || data[v] === 'Created')
    if (Object.keys(data).some(v => data[v] === 'Finished')) {
      observer.next()
    }
    observer.complete()
  }, 2000)
})
source
  .pipe(repeatWhen(notifications => notifications.pipe(takeWhile(() => ids.length > 0))))
  .subscribe({
    next() {
      // emit('badge', true)
    },
    complete() {
      console.log('complete...')
    },
  })
