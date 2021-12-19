import { defineStore } from 'pinia';

interface DemoState {
  counter: number
}

export const useDemo = defineStore('demo', {
  state: (): DemoState => ({
    counter: 0
  }),
  getters: {
    doubleCount: (state) => state.counter * 2,
  },
  actions: {
    increment() {
      this.counter++;
    }
  }
});
