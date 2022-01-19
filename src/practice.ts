enum Color {
  red,
  blue,
  yellow,
}

enum Color {
  rred = 3,
  rblue,
  ryellow,
}

Color[0]
Color.red
console.log('%c [ Color[0] ]', 'font-size:13px; background:pink; color:#bf2c9f;', Color[0])

interface Window {
  hello(): void
}

// window.hello = () => console.log('');
// window.hello('aaa');
// export {};
// declare global {}

const fn: (str: number) => string | void = str => str.toString()
const fn1 = (str: number): string => str.toString()

interface Aaa {
  a: number
  readonly b: string
}
type T1 = keyof Aaa
type T2 = Aaa['a']
const abc: T1 = 'b'
const cba: T2 = 1
// const obj: Aaa = {}; // 会提示该对象缺失的接口属性
// const obj = {} as Aaa; // 不会提示，如果a接口添加新属性，类型断言则容易忘记添加新属性

function handle(e: Event, d: CardinalDirection = 'East') {
  const element = e as any as HTMLElement
}

let x: { foo: number; [t: string]: string | number }
x = { foo: 1, ppp: '99', kk: 2 }

type CardinalDirection = 'North' | 'East' | 'South' | 'West'

const rr = [1, 2]
// rr[0] = 'ss';

function foo(a: number, b: number) {
  return a + addOne(b)
}

function addOne(a: any) {
  return a + 1
}

interface Ncss {
  color?: string
  nest?: {
    [selector: string]: Ncss
  }
}
const example: Ncss = {
  color: 'red',
  nest: {
    '.subclass': {
      color: 'blue',
    },
  },
}
const failsSliently: Ncss = {
  // colour: 'red', // TS Error: 未知属性 'colour'
}

// const gg = 123;
let gg = 123
let pp: typeof gg
pp = 11

const colors = {
  red: 'red',
  blue: 'blue',
}
type Colors = keyof typeof colors
let color: Colors
color = 'red'

// 所有 mixins 都需要
type Constructor<T = {}> = new (...args: any[]) => T
// 添加属性的混合例子
function TimesTamped<TBase extends Constructor>(Base: TBase) {
  return class extends Base {
    timestamp = Date.now()
  }
}

let add = (x: number) => (y: number) => x + y

// ts 内置类型使用
// type Partial<T> = {
//   [P in keyof T]?: T[P];
// };
interface Params {
  name: string
  url: string
  time: number
  phone: number
  readonly keyword: string
}
function getList(params: Partial<Params>): void {}
// type Pick<T, K extends keyof T> = {
//   [P in K]: T[P];
// };
type gg = Pick<Params, 'keyword'>
function getOtherList(params: Pick<Params, 'phone' | 'keyword'>): void {
  // params.keyword = '1';
}
// type Record<K extends keyof any, T> = {
//   [P in K]: T
// }
type recoed = Record<keyof { bb: symbol; a: string }, '7'>
getList({})
getOtherList({ phone: 133, keyword: '666' })

type Eg = Exclude<'key1' | 'key2', 'key1'>
type Eg1 = Extract<'key1' | 'key2', 'key1'>
type o1 = Omit<{ key1: string; name: string }, keyof Params>

// import ts from 'typescript';
// ts.createProgram();

function foo66(arg: unknown) {
  if (typeof arg === 'string') {
    // We know this is a string now.
    console.log(arg.toUpperCase())
  }
}

const obj = {
  name1: 0,
}
const a = 1
obj[`name${a}`] = 1
