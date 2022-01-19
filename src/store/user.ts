import { defineStore } from 'pinia'

export const useUserStore = defineStore({
  id: 'user',
  state: () => ({
    name: 'balabala',
    age: 18,
    money: 1000,
  }),

  getters: {
    roles: () => ['admin', 'viewer'],
  },

  actions: {
    addMoney(num: number) {
      this.money += num
    },
  },
})
