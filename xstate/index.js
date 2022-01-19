import { createMachine, interpret, assign } from 'xstate';

const LIGHT_STATES = {
  RED: 'RED',
  GREEN: 'GREEN',
  YELLOW: 'YELLOW',
};

const LIGHT_EVENTS = {
  CLICK: 'CLICK',
};

export const lightMachine = createMachine(
  {
    id: 'lightMachine',
    initial: LIGHT_STATES.RED,
    context: {
      count: 0,
      user: null,
    },
    states: {
      [LIGHT_STATES.RED]: {
        on: {
          CLICK: {
            target: LIGHT_STATES.GREEN,
            // send 触发 CLICK 事件时 action 就会触发
            actions: (context, event, actionMeta) => {},
            // entry state => actions
            entry: (context, event) => console.log('entry red'),
            // exit state => actions
            exit: (context, event) => console.log('exit red'),
          },
        },
      },
      [LIGHT_STATES.GREEN]: {
        entry: 'entryGREEN',
        exit: ['entryGREEN', 'temp'],
        on: {
          CLICK: {
            target: LIGHT_STATES.YELLOW,
            actions: 'greenClick',
          },
          ADD: {
            actions: 'increment',
          },
        },
      },
      [LIGHT_STATES.YELLOW]: {
        on: {
          [LIGHT_EVENTS.CLICK]: LIGHT_STATES.RED,
        },
      },
    },
  },
  {
    actions: {
      entryGREEN: (context, event) => console.log('entry GREEN'),
      exitGREEN: (context, event) => console.log('exit GREEN'),
      greenClick: (context, event) => console.log('hello green'),
      temp: (context, event) => console.log('temp'),

      increment: assign({ count: context => context.count + 1 }),
    },
  }
);

const promiseService = interpret(lightMachine).onTransition(state => console.log(state.value));

// Start the service
promiseService.start();
// => 'RED'

promiseService.send('CLICK');
// => 'GREEN'
