/**
 * 有些耦合了逻辑展示,交互等的组件，template展示会显得不那么纯粹，template 应该只关心要渲染的 HTML
 * 可以将逻辑部分以 js 处理完毕之后，给出到一个纯粹的 vnode 供 template 渲染
 * 作为组件库的话，更适合这种形式，你可以拿到有完整业务逻辑的 vnode 去渲染成你想要的形式
 */

import { h } from 'vue';

const Comp = {
  render() {
    // return h(
    //   'div',
    //   {
    //     id: 'foo',
    //     _this: this,
    //     onClick: handleClick,
    //   },
    //   'hello'
    // );

    // v-if 在渲染函数里 你可以使用更 “js” 的方式去控制你最后想要的渲染 vnode
    /* const nodeReturn = h('span', 'node');
    if (this.isTrue) {
      return h('div', 'type1');
    } else {
      return nodeReturn;
    } */

    // 获取slot
    const slot = this.$slots.default ? this.$slots.default({ ...this.$props }) : []; // => vnodes[]
    return h(
      'div',
      slot.map((child) => {
        return h('div', { class: `mp-${this.$props.size}` }, [child]);
      })
    );
  },
};

function handleClick() {}

export default { Comp };
