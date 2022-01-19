import { connectable, interval, Subject, take } from 'rxjs';

// suggested refactor
const source = interval(1000);
const tick$ = connectable(source.pipe(take(3)), {
  connector: () => new Subject(),
});
tick$.connect();

tick$.subscribe({
  next: val => console.log('A next....' + val),
  complete: () => console.log('complete...'),
});
