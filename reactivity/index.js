const targetMap = new WeakMap();
let activeEffect = null;

function effect(eff) {
  activeEffect = eff;
  activeEffect();
  activeEffect = null;
}

function track(target, key) {
  if (!activeEffect) return;
  let depsMap = targetMap.get(target);
  if (!depsMap) {
    targetMap.set(target, (depsMap = new Map()));
  }
  let dep = depsMap.get(key);
  if (!dep) {
    depsMap.set(key, (dep = new Set()));
  }
  dep.add(activeEffect);
}

function trigger(target, key) {
  const depsMap = targetMap.get(target);
  if (!depsMap) return;
  const dep = depsMap.get(key);
  dep && dep.forEach(effect => effect());
}

function reactive(target) {
  const handler = {
    get(target, key, receiver) {
      // track(target, key);
      // return Reflect.get(target, key, receiver);
      // 先等结果获取完成再添加依赖
      let result = Reflect.get(target, key, receiver);
      track(target, key);
      return result;
    },
    set(target, key, value, receiver) {
      const oldValue = target[key];
      let result = Reflect.set(target, key, value, receiver);
      if (oldValue != value) {
        trigger(target, key);
      }
      return result;
    },
  };
  return new Proxy(target, handler);
}

function ref(v) {
  const r = {
    get value() {
      track(r, 'value');
      return v;
    },
    set value(newVal) {
      if (r.value != newVal) {
        v = newVal;
        trigger(r, 'value');
      }
    },
  };
  return r;
}

const product = reactive({
  price: 10,
  quantity: 3,
});
let salePrice = ref(0);
let total = 0;

effect(() => {
  total = salePrice.value * product.quantity;
});
effect(() => {
  salePrice.value = product.price * 0.8;
});
setTimeout(() => {
  console.log(total);
  product.quantity = 5;
  console.log(total, '--after');
}, 2000);
setTimeout(() => {
  product.price = 5;
  console.log(total, '--finally');
}, 3000);
